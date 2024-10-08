let userSeq = [];
let gameSeq = [];
let color = ["red","blue","purple","green"];

let started = false;
let level = 0;

document.addEventListener('keypress', function(){
    if(started == false) {
        started = true;
        console.log('game started');
    }

    levelUp();
})

let h3 = document.querySelector('h3');

function btnFlash(btn){
     btn.classList.add('flash')
    
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)};


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randInt = Math.floor(Math.random() *3);
    let randColor = color[randInt];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game Over! your score <b>${level}</b> <br/> Press any key to start`;
        reset();
    }
}

function btnPress() {
   let btn = this;
   console.log(btn);
   btnFlash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns) {
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

