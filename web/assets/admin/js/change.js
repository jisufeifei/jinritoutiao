//1、数据
//-1 异常 0 关闭 1 运行中 2 已上线
let database=[
    {
        num:'TradeCode 0',
        des:'这是一段描述',
        times:'844',
        state:'-1',
        checked:true,
        update:'2017-07-01 00:00:00'
    },
    {
        num:'TradeCode 1',
        des:'这是一段描述',
        times:'844',
        state:'0',
        checked:false,
        update:'2017-07-01 00:00:00'
    },
    {
        num:'TradeCode 2',
        des:'这是一段描述',
        times:'844',
        state:'1',
        checked:true,
        update:'2017-07-01 00:00:00'
    },
    {
        num:'TradeCode 3',
        des:'这是一段描述',
        times:'844',
        state:'2',
        checked:false,
        update:'2017-07-01 00:00:00'
    },
];
//2、添加数据
let box=document.querySelector('.ant-table-tbody');
function render() {
    let html=``;
    database.forEach(v =>{
        let s = {};
        if (v.state == -1) {
            s.className='red';
            s.content = '异常'
        }else if (v.state == 0) {
            s.className='';
            s.content='关闭';
        }else if (v.state == 1) {
            s.className='green';
            s.content='运行';
        }else if (v.state == 2) {
            s.className='blue';
            s.content='已上线';
        }
        html +=`
        <ul class="ant-table-row" data-id="${v.num}">
                                    <li class="selection">
                                    ${v.checked ? '<input checked type="checkbox" id="toggle">' : '<input type="checkbox" id="toggle">'}              
                                    </li>
                                    <li class="num">
                                        <span>${v.num}</span>
                                    </li>
                                    <li class="des">
                                        <span>${v.des}</span>
                                    </li>
                                    <li class="times" style="text-align: right;">
                                        <span>${v.times}万</span>
                                    </li>
                                    <li class="state">
                                        <i class="iconfont icon-yuandianxiao ${s.className}"></i>
                                        <span>${s.content}</span>
                                    </li>
                                    <li class="update">
                                        <span>${v.update}</span>
                                    </li>
                                    <li class="work">
                                        <a href="javascript:void (0)" class="delate">删除</a>
                                        <span>|</span>
                                        <a href="javascript:void (0)" class="warning">订阅警报</a>
                                    </li>
                                </ul>
        `
    });
    box.innerHTML=html;
}
render();




//3、点击删除时删除该行
box.addEventListener('click',(e)=>{
    if (e.target.classList.contains('delate')) {
        let ul=e.target.parentElement.parentElement;
        // console.log(ul);
        let id=ul.getAttribute('data-id');
        // console.log(id)
        database=database.filter(v => v.num !=id);
        render();
    }
})





//4、新建
let add=document.querySelector('.table-new .ant-btn-prime');
console.log(add);
let addbox=document.querySelector('.addbox');
console.log(addbox);
let cancel=document.querySelector('.addbox .cancel');
console.log(cancel);
let confirm=document.querySelector('.addbox .confirm');
console.log(confirm);
let close=document.querySelector('.addbox .icon-you');
console.log(close);
let closes=document.querySelectorAll('.addbox .iconfont,.footer .cancel');
console.log(closes);
let input=document.querySelector('.addbox #input');
console.log(input);
add.addEventListener('click',()=>{
    addbox.classList.add('in');
    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener('click',()=>{
            addbox.classList.remove('in');
        })
    };
    confirm.addEventListener('click',()=>{
        if (input.value.trim()) {
            let o={
                num:'TradeCode '+ database.length + 1,
                des:input.value.trim(),
                times:'844',
                state:'-1',
                update:'2017-07-01 00:00:00'
            }
            database.push(o);
            render();
            addbox.classList.remove('in');
            input.value='';
        }else {
            alert('输入不能为空')
        };
    })
})



//5、全选与反选
let toggle=document.querySelector('.ant-table-thead #alltoggle');
// console.log(toggle);
toggle.addEventListener('click',()=> {
    console.log(toggle.checked);
//     // if else里的内容重复
//     if (toggle.checked) {
//     database = database.map(v => {
//         v.checked = true;
//         return v;
//     })
// } else {
//     database = database.map(v => {
//         v.checked = false;
//         return v;
//     })
// }
// render();
// })
//     //修改为map形式
//     // database.map(v =>{
//     //     v.checked=toggle.checked;
//     //     return v
//     // })
//     // render()
    //修改为foreach形式
    database.forEach( v => v.checked = toggle.checked);
    render();
});
//单选
box.addEventListener('click',e => {
    if (e.target.tagName == 'INPUT'){
        let ul = e.target.parentElement.parentElement;
        let id = ul.getAttribute('data-id');
        database.forEach( v => {
            if ( v.id == id ) {
                v.checked = e.target.checked;
            }
        })
    }
});


















