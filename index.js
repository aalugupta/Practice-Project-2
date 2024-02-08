let paper=document.querySelector(".paper");
let rock=document.querySelector(".rock");
let scissor=document.querySelector(".scissor");
let par=document.querySelector(".computer");
let us=document.querySelector(".uscore");
let cs=document.querySelector(".cscore");
let result=document.querySelector(".result");
let user;
let cscore=0;
let uscore=0;
paper.addEventListener("click",()=>{
    user="paper";
    console.log(user);
    response();
    check();
    setTimeout(()=>{par.classList.remove("flash");},1500);
    setTimeout(()=>{par.classList.remove("flash1");},1500);
    setTimeout(()=>{par.classList.remove("flash2");},1500);
    setTimeout(()=>{result.innerText=""},1500);
});
rock.addEventListener("click",()=>{
    user="rock";
    console.log(user);
    response();
    check();
    setTimeout(()=>{par.classList.remove("flash");},1500);
    setTimeout(()=>{par.classList.remove("flash1");},1500);
    setTimeout(()=>{par.classList.remove("flash2");},1500);
    setTimeout(()=>{result.innerText=""},1500);
});
scissor.addEventListener("click",()=>{
    user="scissor";
    console.log(user);
    response();
    check();
    setTimeout(()=>{par.classList.remove("flash");},1500);
    setTimeout(()=>{par.classList.remove("flash1");},1500);
    setTimeout(()=>{par.classList.remove("flash2");},1500);
    setTimeout(()=>{result.innerText=""},1500);
});
let res;
function response(){
let rand=(Math.floor(Math.random()*3)+1);
    switch(rand){
        case 1:res="paper";
        par.classList.add("flash1");
        console.log(par.classList);
        break;
        
        case 2:res="rock";
        par.classList.add("flash");
        console.log(par.classList);
        break;
        
        case 3:res="scissor";
        par.classList.add("flash2");
        console.log(par.classList);
        break;
    }
}
function check(){
    if(user==="rock"&&res==="rock"){
        result.innerText="Tie";
    }
    if(user==="paper"&&res==="paper"){
        result.innerText="Tie";
    }
    if(user==="scissor"&&res==="scissor"){
        result.innerText="Tie";
    }
    if(user==="rock"&&res==="paper"){
        result.innerText="computer won";
        cscore++;
        cs.innerText=cscore;
    }
    if(user==="rock"&&res==="scissor"){
        result.innerText="user won";
        uscore++;
        us.innerText=uscore;
    }
    if(user==="scissor"&&res==="paper"){
        result.innerText="user won";
        uscore++;
        us.innerText=uscore;
    }
    if(user==="scissor"&&res==="rock"){
        result.innerText="computer won";
        cscore++;
        cs.innerText=cscore;
    }
    if(user==="paper"&&res==="rock"){
        result.innerText="user won";
        uscore++;
        us.innerText=uscore;

    }
    if(user==="paper"&&res==="scissor"){
        result.innerText="computer won";
        cscore++;
        cs.innerText=cscore;
} 
}