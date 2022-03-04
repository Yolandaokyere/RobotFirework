var body = document.querySelector('body')
console.log(body)

<<<<<<< HEAD
=======
body.addEventListener('click', function() {
    body.classList.toggle('darkmode')
})

>>>>>>> 6f68ef14441824e16f4b012c3ba81929fec8430d
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
<<<<<<< HEAD
} else {
    musiclist.pause()
    buttonPlay.querySelector('img').src ="images/play.png";

=======
    body.classList.toggle('darkmode')
} else {
    musiclist.pause()
    buttonPlay.querySelector('img').src ="images/play.png";
    body.classList.toggle('darkmode')
>>>>>>> 6f68ef14441824e16f4b012c3ba81929fec8430d
}
})


<<<<<<< HEAD
body.addEventListener('click', function() {
    body.classList.toggle('darkmode')
})
=======
>>>>>>> 6f68ef14441824e16f4b012c3ba81929fec8430d
