let one =document.getElementById("one")
let two =document.getElementById("two")
let three=document.getElementById("three")
let four =document.getElementById("four")
let five =document.getElementById("five")
let six =document.getElementById("six")
let seven =document.getElementById("seven")
let eight =document.getElementById("eight")
let nine =document.getElementById("nine")
let zero =document.getElementById("zero")
let divide =document.getElementById("divide")
let multi =document.getElementById("multi")
let subs =document.getElementById("subs")
let dot=document.getElementById("dot")

let add =document.getElementById("add")
let clear =document.getElementById("clear")
let equal=document.getElementById("equal")
let display=document.getElementById("display")
let forms=document.getElementById("forms")
//////////////////////////////add


one.onclick=function(){
    display.value +="1"
}

two.onclick=function(){
    display.value +="2"
}

three.onclick=function(){
    display.value +="3"
}

four.onclick=function(){
    display.value +="4"
}

five.onclick=function(){
    display.value +="5"
}

six.onclick=function(){
    display.value +="6"
}

seven.onclick=function(){
    display.value +="7"
}

eight.onclick=function(){
    display.value +="8"
}

nine.onclick=function(){
    display.value +="9"
}

zero.onclick=function(){
    display.value +="0"
}
add.onclick=function(){
    display.value +="+"
}

divide.onclick=function(){
    display.value +="/"
}

subs.onclick=function(){
    display.value +="-"
}

multi.onclick=function(){
    display.value +="*"
}


dot.onclick=function(){
    display.value +="."
}
/////////////////////////////////

equal.onclick=function(){
    if(display.value==""){
        alert("please enter any numbers to calculate!")
    }else{
display.value=eval(display.value)
    }



}/////////////////

clear.onclick=function(){
    display.value =""
}