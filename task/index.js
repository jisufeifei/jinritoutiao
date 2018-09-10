const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require("fs");
const async = require("async");
const mysql = require("mysql");
const filter = require("bloom-filter-x");


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'wuif'
}) ;

connection.connect();

function fetch_news() {
    request({
        url:'http://news.zol.com.cn/',
        encoding:null
    },(err,res,body) => {
        body = iconv.decode(body,'gb2312');
        let $ = cheerio.load(body);
        let arr = [];
        $('.content-list li').each((k,v) => {
            let title = $(v).find('.info-head a').text();
            let dsc = $(v).find('p').text();
            let url = $(v).find('a').attr('href');
            let time = $(v).find('.foot-data').text();
            let image = $(v).find('img').attr('.src');
            if (filter.add(url)) {
                arr.push({
                    title:title,
                    dsc:dsc,
                    url:url,
                    create_time:time,
                    image:image
                })
            }
        });
        if (arr.length) {
            async.eachLimit(arr,1,(v,next) =>{
                request({
                    title:v.title,
                    dsc:v.dsc,
                    url:v.url,
                    create_time:v.time,
                    image:v.image
                })
            })
        }
        let d = new Date();
        if (!arr.length) {
            console.log(d.toUTCString()+'捕获一次，本次未更新...')
        }else {
            console.log(d.toUTCString()+'捕获一次，本次更新'+arr.length+'次')
        }
        async.eachLimit(arr,1,(v,next) =>{
            request({
                title:v,
                encoding: null
            },(err,res,body) =>{
                console.log(v);
                next(null);


                connection.query("insert into news (cid,title,dsc,image,url,create_time,content) values (?,?,?,?,?,?,?)", ["1", v.title, v.dsc, v.image, v.url, "", ""], function (err,rows,fields) {
                    if (err) {
                        console.log("添加失败",err.message);
                    }else{
                        console.log("添加成功");
                    }
                })
            })
        })
    })
}


// function fetch_news_yule() {
//     request({
//         url:'http://news.zol.com.cn/',
//         encoding:null
//     },(err,res,body) => {
//         body = iconv.decode(body,'gb2312');
//         let $ = cheerio.load(body);
//         let arr = [];
//         $('.content-list li').each((k,v) => {
//             let title = $(v).find('.info-head a').text();
//             let dsc = $(v).find('p').text();
//             let url = $(v).find('a').attr('href');
//             let time = $(v).find('.foot-data').text();
//             let image = $(v).find('img').attr('.src');
//             if (filter.add(url)) {
//                 arr.push({
//                     title:title,
//                     dsc:dsc,
//                     url:url,
//                     create_time:time,
//                     image:image
//                 })
//             }
//         });
//         if (arr.length) {
//             async.eachLimit(arr,1,(v,next) =>{
//                 request({
//                     title:v.title,
//                     dsc:v.dsc,
//                     url:v.url,
//                     create_time:v.time,
//                     image:v.image
//                 })
//             })
//         }
//         let d = new Date();
//         if (!arr.length) {
//             console.log(d.toUTCString()+'捕获一次，本次未更新...')
//         }else {
//             console.log(d.toUTCString()+'捕获一次，本次更新'+arr.length+'次')
//         }
//         async.eachLimit(arr,1,(v,next) =>{
//             request({
//                 title:v,
//                 encoding: null
//             },(err,res,body) =>{
//                 console.log(v);
//                 next(null);
//
//
//                 connection.query("insert into news (cid,title,dsc,image,url,create_time,content) values (?,?,?,?,?,?,?)", ["2", v.title, v.dsc, v.image, v.url, "", ""], function (err,rows,fields) {
//                     if (err) {
//                         console.log("添加失败",err.message);
//                     }else{
//                         console.log("添加成功");
//                     }
//                 })
//             })
//         })
//     })
// }
fetch_news();
// fetch_news_yule();
setInterval(fetch_news,2*60*1000);
// setInterval(fetch_news_yule,2*60*1000);






























































