<?php
require_once("Timer.php");

const MODE_SAVE = "save_timer";
const MODE_LIST = "list_timer";

if(array_key_exists("task", $_GET)) {
    $task = $_GET["task"];

    if($task == MODE_SAVE) {
        saveTimer();
    }

    if($task == MODE_LIST) {
        listTimer();
    }

}