
var second = 0;
var minute = 0;
var heure = 0;
var timer = null;
var timerSong = null;

var isSong = false;

document.querySelector(".form_number").addEventListener("submit", function(e) {
    console.log("on lance le timer à partir d'un nombre");
    e.preventDefault();

    // on stop l'autre formulaire
    resetTimer();

    second = this.elements["input_number"].value;
    //document.querySelector(".timer").textContent = valeur;
    // on lance la fonction qui décompter
    timer = window.setInterval(decount, 1000);
});

document.querySelector(".form_time").addEventListener("submit", function(e) {
    e.preventDefault();
    resetTimer();
    let dateNow = new Date();
    let tabDateInput = this.elements["input_time"].value.split(":");
    console.log(tabDateInput);
    let dateInput = new Date();
    dateInput.setHours(tabDateInput[0]);
    dateInput.setMinutes(tabDateInput[1]);
    console.log(dateNow);
    console.log(dateInput);
    second = parseInt((dateInput.getTime() - dateNow.getTime())/1000);

    timer = window.setInterval(decount, 1000);
})

/**
 * Fonction qui lance le minuteur
 */
function decount() {
    console.log("on fait un decount");
    if(parseInt(second) <= 0 && parseInt(minute) <= 0) {
        resetTimer();
        song();
        
    }

    while(second >= 60) {
        minute++;
        second -= 60;
    }
    console.log("minute = " + minute + " second = " + second);

    if(second <= 0 && minute > 0) {
        minute --;
        second = 59;
    }

    let secondStr = second;
    if(second < 10)
        secondStr = "0"+second


    document.querySelector(".timer").textContent = minute+":"+secondStr;
    second = parseInt(second) - 1;
}

/**
 * arrête le timer
 */
function resetTimer() {
    window.clearInterval(timer);
    minute = 0;
    second = 0;
}

/**
 * Lance la sonnerie de fin
 */
function song() {
    // pour répéter la musique de fin
    isSong = true;

    // on affiche le bouton pour stopper le son

    var onChangeSound = new Sound("musics/msn_wizz.mp3");
    if(isSong) {
        document.querySelector(".btn_stop").style.display = "block";
        timerSong = window.setInterval(function() {
            onChangeSound.play();
        }, 1500);
    }
        
}

/**
 * Transforme les secondes en un tableau en minutes/secondes
 * @param {} second 
 */
function getTabMinuteSecond(second) {
    console.log("* ** get tab ** * " + typeof(second));
    let minute = 0;
    while(parseInt(second) >= 60) {
        console.log("on rentre dans la boucle");
        minute++;
        second -= 60;
    }
    return {minute, second};
}

document.querySelector(".form_save").addEventListener("submit", function(e) {
    e.preventDefault();
    var titre = this.elements["timer_titre"].value;
    var second = parseInt(this.elements["timer_second"].value);
    var minute = parseInt(this.elements["timer_minute"].value);
    console.log((typeof(minute)));
    if(typeof(minute) === 'number') {
        second += minute * 60;
    }
    console.log("seconde envoyé = " + second);
    data = new FormData();
    data.append("titre_timer", titre);
    data.append("second_timer",second);

    const requeteAjax = new XMLHttpRequest();
    const task = "save_timer";
    requeteAjax.open("POST","router.php?task="+task);
    requeteAjax.onload = function() {
        const result = JSON.parse(requeteAjax.responseText);
        console.log(result);
        if(result.status == "success") {
            
        }
    }
    requeteAjax.send(data);

});

function prepareDecount(secondInitial) {
    console.log("* ** *** prepareDecount *** ** *");
    resetTimer();
    second = secondInitial;
    // on lance la fonction qui décompter
    timer = window.setInterval(decount, 1000);
}

function listTimer() {
    const requeteAjax = new XMLHttpRequest();
    const task = "list_timer";
    requeteAjax.open("GET","router.php?task="+task);
    requeteAjax.onload = function() {
        const result = JSON.parse(requeteAjax.responseText);
        console.log(result);
        if(result.status == "success") {
            const ulHTML = document.querySelector(".timer_list");
            const timerHTML = result.data.map(function(timer) {
                
                const tabMS = getTabMinuteSecond(timer.second);
                console.log(tabMS);
                return `<li> <button onClick="prepareDecount(${timer.second})">${timer.titre}, ${tabMS.minute} min ${tabMS.second} </button></li>`;
            }).join('');
            
            ulHTML.innerHTML = timerHTML;
        }
    }
    requeteAjax.send();
}

listTimer();

document.querySelector(".btn_stop").addEventListener("click", function(e) {
    console.log("* ** on stoppe la musque *** ** * ")
    e.preventDefault();
    // on stop la musique
    isSong = false;
    window.clearInterval(timerSong);
    // on cache le bouton
    this.style.display = "none";
})