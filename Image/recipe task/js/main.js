let allData = [];
let oneRec = {}
let row = document.getElementById("row")
let links = document.querySelectorAll(".nav-link");
for( let i = 0 ; i < links.length ; i++){
    links[i].addEventListener("click" , function(e){
      let term=  e.target.innerHTML;
      console.log(term)
        getRec(term)
        
    })
}
async function getRec(word){
    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${word}`);
    let data = await result.json()
    console.log(data);
      allData = data.recipes
     console.log(allData);
     displayRec()
    
}
getRec("tomato");
//let div = document.querySelector(".displayResult")
function displayRec(){
    let str = ""
    for(let i = 0 ; i < allData.length ; i++ ){
        str += `
        
        <div class="col-md-4">
            <div >
        <img  src="${allData[i].image_url}" class = "img-fluid">
        <h2>${allData[i].title}</h2>
        <p>${allData[i].publisher}</p>
        </div>
        </div>

        `
    }
    row.innerHTML = str;
}
async function getOneRec(id){
    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?Id=${id}`);
    let data = await result.json()
    console.log(data);
      allData = data.recipes
     console.log(allData);
     displayOneRec()
}

function displayOneRec(){
    let str = ""
    for(let i = 0 ; i < allData.length ; i++ ){
        str += `
        
        <div class="col-md-4">
            <div >
        <img onclick= "getOneRec("${allData[i].recipe_id}")  src="${allData[i].image_url}" class = "img-fluid">
        <h2>${allData[i].title}</h2>
        <p>${allData[i].publisher}</p>
        <h3>"${allData[i].recipe_id}"</h3>
        </div>
        </div>

        `
    }
    row.innerHTML = str;
}