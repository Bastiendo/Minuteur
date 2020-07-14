var Sound = function(src)
{
    var sound = document.createElement("audio");
 
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
 
    this.play = function()
    {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        //console.log(src + " is playing");
    }
    this.stop = function()
    {
        sound.stop();
    }
}

