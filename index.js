let timerdisplay=document.querySelector(".timerdisplay");
let stopbtn=document.getElementById("stopbtn");
let startbtn=document.getElementById("startbtn");
let resetbtn=document.getElementById("resetbtn");

let msec=0;
let sec=0;
let min=0;

let timerId=null;

startbtn.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    timerdisplay.innerHTML='00 : 00 : 00';
    msec=sec=min=0;
})

function startTimer(){
    msec=parseInt(msec);
    sec=parseInt(sec);
    min=parseInt(min);
    msec++
    if(msec==100){
        sec++;
        msec=0;
        if(sec==60){
            min++;
            sec=0;
        }
    }
    if(msec<10){
        msec="0"+msec;
    }
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    timerdisplay.innerHTML=min+" : "+sec+" : "+msec;
}