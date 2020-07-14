<?php 

require_once("Manager.php");

function saveTimer() {

    if(!array_key_exists("titre_timer", $_POST) && array_key_exists(!"second_timer", $_POST) ) {
        echo(json_encode(["status"=>"error","message"=> "un des champs à été mal rempli"]));
    }

    $titre = $_POST["titre_timer"];
    $second = $_POST["second_timer"];

    $db = connect();
    $query = $db->prepare("insert into minuteur set 
    titre = :titre, 
    second = :second,
    actif = :actif");
    $query->execute([
        "titre" => $titre,
        "second" => $second,
        "actif"  => true
    ]);
    echo json_encode(["status" => "success",
        "message" => "le message a été  envoyé",
        "data" => [
            "titre"=>$titre,
            "second"=>$second
        ]]);
}

function listTimer() {
    $db = connect();
    $resultats = $db->query("select * from minuteur where actif = true");
    $timer = $resultats->fetchAll();
    echo json_encode(["status" => "success", "data" => $timer]);
}