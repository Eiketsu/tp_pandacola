<?php

$db = new PDO('mysql:host=localhost;dbname=pandacola;charset=utf8','root','');

$id = $_GET['id'];

function getQuestions() {
    
    global $db;
    
    global $id;
    
    $result = $db->query('SELECT * FROM questions WHERE id='.$id);
    
    $results = $result->fetchAll();
    
    echo json_encode($results);
}

getQuestions();





?>