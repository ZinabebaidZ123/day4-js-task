var imgs = document.querySelectorAll(".img-fluid");
console.log(imgs);
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var currentIndex = 0;
var imgsArray = []

    
//functon to close slide
   
    //add the img src to the slider (smallBox)
  for(var i = 0 ; i<imgs.length ; i++ ){
    imgs[i].addEventListener("click" , function(e){
    fixedBox.classList.replace("d-none" , "d-flex");
        console.log(imgs[i]);
        console.log(i)
        var clickedImg = e.target;
      currentIndex =  imgsArray.indexOf(clickedImg)
      console.log(currentIndex)
      console.log(imgsArray)
        var imgSrc = clickedImg.getAttribute("src");
        console.log(imgSrc)
    
       smallBox.style.backgroundImage= `url(${imgSrc})`
    })
}
//push imgs in the array
for (var i =  0 ; i < imgs.length ; i++){
    
    imgsArray.push(imgs[i]);
}
console.log(imgsArray);
//function to get the next slide
function getNextSlide(){
    currentIndex++
    if(currentIndex == imgsArray.length ){
        currentIndex = 0
    }
    var src =  imgsArray[currentIndex].getAttribute("src");
    console.log(src)
  smallBox.style.backgroundImage = `url(${src})`;
  console.log(src)
}
// var id =setInterval(getNextSlide , 1000);
nextBtn.addEventListener("click" , getNextSlide);
nextBtn.addEventListener
    //function to get the prev slide
    function getPrevSlide(){
        currentIndex--
        if(currentIndex < 0){
            currentIndex = imgsArray.length-1 
        }
            var src = imgsArray[currentIndex].getAttribute("src");
            console.log(src)
           smallBox.style.backgroundImage = `url(${src})`;
    }
prevBtn.addEventListener("click" , getPrevSlide)
   //function to close slide
   function closeSlide(){
    fixedBox.classList.replace("d-flex","d-none");
}
closeBtn.addEventListener("click" , closeSlide);
fixedBox.addEventListener("click" , closeSlide);
smallBox.addEventListener("click" , function(e){
    e.stopPropagation();
})
//
document.addEventListener("keyup" , function(e)
{
    if(fixedBox.getAttribute("class").includes("d-flex")){
        if(e.key =="Escape"){
            closeSlide();
        }
        else if(e.key == "ArrowRight"){
            getNextSlide();
        }
        else if(e.key == "ArrowLeft"){
            getPrevSlide();
        }
    }
})
     
