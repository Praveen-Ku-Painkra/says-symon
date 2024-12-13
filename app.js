let seq = [];
let input = [];
let start = false
let h2 = document.querySelector('.level');
let level = 0;
document.addEventListener('keypress',function(){
   if(start ===false){
      console.log('Game Started');
      start = true;
      setTimeout(()=>{
         levelUp()
      },1000)
   }
  
})

function flash(btn){
   btn.classList.add('blink');
   setTimeout(function (){
      btn.classList.remove('blink');
   },500);

}
function clickFlash(btn){
   btn.classList.add('clicked');
   setTimeout(function (){
      btn.classList.remove('clicked');
   },200);

}
function levelUpDelay(btn){
   setTimeout(function (){
      levelUp();
   },1000);

}

function check(le){
   if(seq[le]===input[le]){
     if(seq.length === input.length){
       levelUpDelay();
      //  input = [];

     }else{
      console.log("click again");
     }
   }else{
      h2.innerHTML = `Game over! your score was <b>"${level}"</b> <br> <hr> Press any key to restart.`
      reset()
   }
}

function levelUp(){
   input = [];
   level++;
   h2.innerText = `Level ${level}`;
   let btns = ['red','yellow','green','purple'];
   //Random color
   let random = Math.floor(Math.random()*4);
    let randomBtn = btns[random];
   let btn = document.querySelector(`.${randomBtn}`);
   flash(btn);
   seq.push(randomBtn);
   console.log(seq);
}

function btnPress(){
 let btn = this;
 clickFlash(this);
 let cls = this.classList[1];
 input.push(cls);
 console.log(input);
 check(input.length-1);
}

let allBtn = document.querySelectorAll('.btn');

for(btn of allBtn){
   btn.addEventListener('click',btnPress);
   
}
let finalValue = document.querySelector('#finalValue');
finalValue.innerText = `Higesht score is '${0}'`;
let HigeshtScore = 0;
function reset(){
   start = false;
   seq = [];
   input = [];


   if(level>HigeshtScore){
      finalValue.innerText = `Higesht score is '${level}'`
      HigeshtScore = level;
   }
   

   level = 0;
   gameOver();
   setTimeout(gameOver,200)

}
function gameOver(){
   let body = document.querySelector('body');
   body.classList.add('gameOver');
   setTimeout(()=>{
      body.classList.remove('gameOver');
   },150);
}