<?php

$db = new PDO('mysql:host=localhost;dbname=pandacola;charset=utf8','root','');

$data = $_POST['history'];

function registerHistory() {
    
    global $db;
    
    global $data;
    
    $req = $db->prepare('INSERT INTO historique(historique) VALUES(:history)');
    
    $req->execute(array('history' => $data));
    
}


registerHistory();





?>