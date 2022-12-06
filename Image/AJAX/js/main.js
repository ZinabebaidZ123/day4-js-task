//variable declaration
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var rowData = document.querySelector(".row");
var links = document.querySelectorAll(".nav-link");
console.log(links);
var allData = []

// for(var i = 0 ; i < links.length ; i++){
//     links[i].addEventListener("click" , function(e){
//         var term = e.target.innerHTML;
//         getData(term)
//     })
// }
async function getPizza()
{
    let result =await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    let data = await result.json()
    console.log("pizza");
}
async function getPasta()
{
    let result =await fetch("https://forkify-api.herokuapp.com/api/search?q=pasta");
    let data = await result.json()
    console.log("pasta");
}
async function getSalad()
{
    let result =await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
    let data = await result.json()
    console.log("salad");
}
async function getAllData(){
await getPasta();
await getSalad()
getPizza()

}
getAllData()
// function getPizza(){
//     return new Promise( function(resolve , reject){
// var req = new XMLHttpRequest();
// req.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza");
// req.send();
// req.addEventListener("load" ,function(){
//     //console.log(req.readyState , req.status)
//     if(req.readyState==4 &&req.status == 200){
//         //console.log(req.response );
//         allData = JSON.parse(req.response);
//         allData = allData.recipes;
//         //console.log(allData);
//         //displayAllData();
//         console.log("pizza")
//       resolve()
      

//     }
//     else{
//         console.log("error")
//         reject()
//     }
// })
// })}

// function getPasta(){
//     return new Promise(function(resolve , reject){
//     var req = new XMLHttpRequest();
//     req.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pasta");
//     req.send();
//     req.addEventListener("load" ,function(){
//         //console.log(req.readyState , req.status)
//         if(req.readyState==4 &&req.status == 200){
//             //console.log(req.response );
//             allData = JSON.parse(req.response);
//             allData = allData.recipes;
//             //console.log(allData);
//             //displayAllData();
//             console.log("pasta")
//           resolve()
    
//         }
//         else{
//             console.log("error")
//             reject()
//         }
//     })
//     })}

//     function getSalad(y){
//         return new Promise(function(resolve , reject){
//         var req = new XMLHttpRequest();
//         req.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=salad");
//         req.send();
//         req.addEventListener("load" ,function(){
//             //console.log(req.readyState , req.status)
//             if(req.readyState==4 &&req.status == 200){
//                 //console.log(req.response );
//                 allData = JSON.parse(req.response);
//                 allData = allData.recipes;
//                 //console.log(allData);
//                 //displayAllData();
//                 console.log("salad")
//               resolve()
        
//             }
//             else{
//                 console.log("error")
//                 reject()
//             }
//         })
//         })}

//         function end()
//         {
//             console.log("end")
//         }
//         //callback 
//         //getPizza( function(){getPasta(function(){getSalad(end)})})
//        // getSalad(()=>{getPizza(()=>{getPasta(end)})})
//        getPizza().then(()=>getPasta()).then(()=>getSalad()).catch(end)
    


// function displayAllData(){
// var str = "" ;
//     for(var i = 0 ; i < allData.length; i++){
//      str+= ` <div class="col-md-4">
//      <div class="bg-info">
//      <img src="${allData[i].image_url}"   class='img-fluid' />
//        <h3>${allData[i].title}</h3>
//        <h5>${allData[i].publisher}</h5>
       
//      </div>
//    </div>`
//     }
//     rowData.innerHTML = str;





// }
 
