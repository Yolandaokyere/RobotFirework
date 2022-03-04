var body = document.querySelector('body')
console.log(body)

var buttonPlay = document.querySelector('#music')
console.log(buttonPlay)
var musiclist = document.querySelector('audio')
console.log(musiclist)

//buttonPlay = function. Music plsying if click. 
// functie buttonplay tekst = gekoppeld. en andersom

buttonPlay.addEventListener('click', function() {
if(musiclist.paused){
    musiclist.play()
    buttonPlay.querySelector('img').src ="images/pausebutton.png";
} else {
    musiclist.pause()
    buttonPlay.querySelector('img').src ="images/play.png";

}
})


body.addEventListener('click', function() {
    body.classList.toggle('darkmode')
})