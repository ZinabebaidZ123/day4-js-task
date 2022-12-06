//Q1

var inputName = document.getElementById("nameInput");
var errNameAlert = document.getElementById("NameError");
var errPassAlert = document.getElementById("passError");
var rePassAlert = document.getElementById("errorRePass")
var  passInput = document.getElementById("pass");
var  rePassInput = document.getElementById("repass");
var submitBtn = document.getElementById("submit");
var successRegs = document.getElementById("success")
function putInputBorder(){
   
    inputName.style.border = " 2px solid green";
    
}
function returnBlackBorder(){
    inputName.style.border = " 2px solid black";
}

function validateName(){
    if(inputName.value== " " | inputName.value.length < 3){
        errNameAlert.style.display = "block";
        inputName.style.border = "2px solid #f00";
        return true
    }
    else{
        inputName.style.border = "2px solid #000";
        errNameAlert.style.display = "none";
    }
}
inputName.onblur = validateName;

function validatePass(){
    if(passInput.value == " "  | passInput.value.length < 3  ){
        errPassAlert.style.display = "block";
        passInput.style.border = " 2px solid #f00";
        return true
    }
    else{
        errPassAlert.style.display = "none";
        passInput.style.border = " 2px solid #000";
    }

}
passInput.onblur = validatePass ;

function checkPassIdentity(){
    if(rePassInput.value != rePassInput.value | rePassInput.value == " " | rePassInput.value.length < 3){
        rePassAlert.style.display = "block";
        rePassInput.style.border = "2px solid #f00";
        return true
    }
    else{
        rePassAlert.style.display = "none";
        rePassInput.style.border = "2px solid #000"
    }
}
rePassInput.onblur =  checkPassIdentity;

function makeSubmit(){
    if(inputName.value != " "  && inputName.value.length >= 3 && passInput.value != " "  && passInput.value.length >=3  
    &&rePassInput.value == rePassInput.value && rePassInput.value != " " && rePassInput.value.length >= 3 ){
  
        setTimeout(function(){
        successRegs.style.display = "block";
        location.assign("home.html");
        },5000)
        
  
    }
 
    else{
        location.assign("http://127.0.0.1:5500/js-day-4/index4.html");
        alert("invalid regestration");
        inputName.value = "";
        passInput.value = "";
        rePassInput.value == "";
    }


}
submitBtn.onclick = makeSubmit ;
// -------------------------------------------------------------------------------------
//Q2

var imgsDiv = document.getElementById("imgs");
var btn = document.getElementById("btn")
   
    
var index = 0;
var img =  document.createElement("img");
function createImgs(){

var imgSrc = 
["Image/boy1.jpg" , "Image/boy2.jpg" , "Image/girl1.jpg" ,"Image/girl3.jpg" , "Image/girl4.jpg" ,"Image/girl5.jpg"];

// for(var i = 0 ; i < imgSrc.length ; i++){
if(index == imgSrc.length){
    index = 0
}
    console.log(index);
   
    console.log(img);
    imgsDiv.appendChild(img);
    img.style.width= "200px";
    img.style.height= "200px";
    var setSrc = img.setAttribute("src" , imgSrc[Math.floor(Math.random(index)*imgSrc.length)]);
    

       console.log(setSrc);//leh hena bytb3 undefined
    //    getNum()

      
    }
btn.onclick = createImgs

function getNum(){
alert(imgsDiv.childNodes.length-1 + "imgs" );
}

imgsDiv.addEventListener("click" , function(e){
  imgsDiv.remove(e.target);
  getNum()
})
//Q make a calculator;
function makeCalc(){
    var operator = document.query
}


// program for a simple calculator


// take the operand input
// const number1 = parseInt(prompt('Enter first number: '));
// const number2 = parseInt(prompt('Enter second number: '));
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

//Q make a style to paragraph---------------------------------------------------------

//------------------------------------------------------------------------------------
//Q-----------------------------img slider----------------------------------
var nextBtn = document.getElementById("nextBtn");
var slideShow = document.getElementById("slideShow");
var stopBtn = document.getElementById("stop");
var prevBtn = document.getElementById("prevBtn");
var imgSlide = document.getElementById("slide-img")

var srcArr = ["Image/boy1.jpg" , "Image/boy2.jpg" , "Image/girl1.jpg" ,"Image/girl3.jpg" , "Image/girl4.jpg" ,
"Image/girl5.jpg"];
function nextImg(){
    for(var i = 0;i<srcArr.length;i++){
        if(i != srcArr.length-1){
            imgSlide.setAttribute("src" , srcArr[i]);
            console.log(srcArr[i]);
        }
        else{
            imgSlide.setAttribute("src" ,srcArr[0])
        }
    }
  
  
}
nextBtn.onclick = nextImg;


function show(){
    setInterval(function(){
      var i=0;
      imgSlide.src = srcArr[i];
      i++;
      if(i > srcArr.length-1){
        i = 0;
      }

    },1000)
}
 //q mareball ---------------------------------------------------------------------------------------


 var movedImg = document.getElementById("move");
 var imgs = document.querySelectorAll("#default");
 var id;
 function moveBall(){
 var x = parseInt(movedImg.style.left);
 console.log(x);
  id = setInterval(function(){
   movedImg.style.display = "block";
   x+=100 ;
   movedImg.style.left= x+"px";
   if(x >=300){
    x = 10;
    movedImg.style.left = x + "px";

   }

},800);
 }

moveBall();
for(var i =0; i<imgs.length ; i++){
    imgs[i].addEventListener("mouseover" , function(e){
        if(e.target){
               clearInterval(id)
        }
        else{
            moveBall();
        }
    }) }







