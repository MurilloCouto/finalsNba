const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const objetivo = '02 jun 2022'

function countDown(){
    const dataObj = new Date(objetivo)
    const dataHoje = new Date()

    const segTotal = (dataObj - dataHoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = checar(finalHoras)
    minuto.innerHTML = checar(finalMinutos)
    segundo.innerHTML = checar(finalSegundos)
}

function checar( tempo ){
    return tempo < 10? `${tempo}` : tempo
}

countDown();
setInterval(countDown, 1000)


var music = new Audio();
music.src = "finalsMusic.mp3";

function Play(){
    music.play();
}

function Stop(){
    music.pause();
}

function Destacar(){
    var destaque = document.getElementsByClassName('imgGame');
    destaque = Array.from(destaque);

    for(let i = 0; i < destaque.length; i++){
        destaque[i].classList.toggle('destacarCard');
    }
}

setInterval(Destacar, 1500);

function Select(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('selectedCard')
}