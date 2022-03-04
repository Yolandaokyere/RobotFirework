var body = document.querySelector('body')
console.log(body)

body.addEventListener('click', function() {
    body.classList.toggle('darkmode')
})

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
    body.classList.toggle('darkmode')
} else {
    musiclist.pause()
    buttonPlay.querySelector('img').src ="images/play.png";
    body.classList.toggle('darkmode')
}
})


