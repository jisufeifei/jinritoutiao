<?php
include '../core/db.php';
class admin extends db{
    public function index(){
        include '../views/admin/admin.html';
//        echo 'index';
    }
    public function news(){
        $course = $this -> pdo ->query('select * from news limit 5') ->fetchAll();
        include "../views/admin/news.html";
//        echo 'category';
    }
    public function category(){
        echo 'category';
    }
    public function search(){
        echo 'search';
    }
};