let screen=document.getElementById("t1");
let btn=document.getElementsByClassName("btn");

for ( item of btn) {
    item.addEventListener("click",(e)=>{
        let btnText=e.target.innerHTML;
        screen.value+=btnText;
    })
}

sin=()=>{
    screen.value=Math.sin(screen.value);
}

cos=()=>{
    screen.value=Math.cos(screen.value);
}

tan=()=>{
    screen.value=Math.tan(screen.value);
}

pow=()=>{
    screen.value=Math.pow(screen.value);
}

sqrt=()=>{
    screen.value=Math.sqrt(screen.value);
}

log=()=>{
    screen.value=Math.log(screen.value);
}

pi=()=>{
    screen.value=3.14159265359;
}

e=()=>{
    screen.value=2.71828182846;
}

fact=()=>{
    var n=1;
    for (let i = 1; i <= screen.value; i++) {
        n=n*i;      
    }
    screen.value=n;
}

backspace=()=>{
    screen.value=screen.value.substr(0,screen.value.length)
}

radian=()=>{
    screen.value=(screen.value *3.14)/180;
}

degree=()=>{
    screen.value=(screen.value*180)/3.14;
}
