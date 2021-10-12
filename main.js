let score = 0;
let maxScore = 0;
let time = 61; //segundos
let startGame = false;
const game = document.getElementById("game");
const ubicacionScore = document.getElementById("score");
const ubicacionsTime = document.getElementById("time");
const jugador = document.getElementById("player");
const menu = document.getElementById("menu");


jugador.addEventListener("click", acertaste);

function initializeGame(scoreSelect){
    maxScore = scoreSelect;
    startGame = true;
    menu.style.display = 'none';
    moverJugador();
    game.style.display = 'block';
    restarTiempo();
}

function moverJugador(){
    let alturaRandom = Math.floor(Math.random() * 66);
    let longitudRandom = Math.round(Math.random() * 55);
    jugador.style.marginTop = alturaRandom + 'vh';
    jugador.style.marginLeft= longitudRandom + 'vw';
}

function acertaste (){
    score++;
    ubicacionScore.innerHTML = score + "/" + maxScore;
    moverJugador();
    if(score == maxScore){
        finalizar();
    }
}

function restarTiempo (){
    if ((time > 0) && startGame){
        time--;
        ubicacionsTime.innerHTML = time;
    }else if(time == 0){
        finalizar();
    }
}

function finalizar(){
    if(time == 0){
        alert("Perdiste! Te quedaste sin tiempo!");
    }else{
        alert("Enhorabuena! Has ganado!")
    }
    menu.style.display = 'block';
    moverJugador();
    game.style.display = 'none';
    startGame = false;
    score = 0;
    time = 61;
    ubicacionScore.innerHTML = score;
    ubicacionsTime.innerHTML = time;
}

setInterval(restarTiempo, 1000);