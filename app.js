let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let color=["one", "two","three","four"];
let highestscore=0;
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
});
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranidx=Math.floor(Math.random()*3)+1;
    let rancolor=color[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    btnflash(ranbtn);
    if(highestscore<level){
        highestscore=level;
    };
}

function checkans(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup(),2500);
        }
    }else{
        h2.innerHTML=`Game over! <b>Your score was ${level} </b><br>press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500);
        reset();
        let h3=document.createElement("h3");
        h3.innerText=`highscore is ${highestscore}`;
        h2.append(h3);
    }
  
  
}
function btnpresses(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
};
let allbtns=document.querySelectorAll(".btn");
for(allbtn of allbtns){
    allbtn.addEventListener("click",btnpresses);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}
