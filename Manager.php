<?php 

function connect() {
        
    $db = new PDO(
        'mysql:host=localhost:3308;dbname=minuteur;charset=utf8',
        'root',
        '',
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    return $db;
}