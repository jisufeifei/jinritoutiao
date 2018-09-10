<?php
include '../core/db.php';
class page extends db{
    const PER_PAGE = 50;
    public function index() {
        //接受分类id
        if (isset($_GET['cid'])){
            $cid = $_GET['cid'];
        }else{
            $cid = 1;
        }
        //接收页数
        if (isset($_GET['page'])){
            $page = $_GET['page'];
        }else{
            $page = 1;
        }
        $array = $this->pdo->query('select * from category') -> fetchAll();
        $course = $this -> pdo ->query('select * from news limit 20') ->fetchAll();
        include '../views/index/index.html';
    }
    public function category(){
        include '../views/index/category.html';

    }
    public function search(){
        include '../views/index/search.html';
    }
    public function plus(){
        include '../views/index/plus.html';
    }
};