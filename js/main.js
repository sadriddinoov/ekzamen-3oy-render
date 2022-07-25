let elList = document.querySelector(".list");
let elWrapper = document.querySelector(".img-wrapper1");
let elWrapper2 = document.querySelector(".img-wrapper2");
let elBtn1 = document.querySelector(".btn-1");
let elBtn2 = document.querySelector(".btn-2");
let elBtn3 = document.querySelector(".btn-3");
let elBtnclean = document.querySelector(".btn-clean");
let elBody = document.querySelector(".body");

var image1 = document.createElement("img")

image1.src = "./images/pokemon_logo.png";

image1.width = "300"

var image2 = document.createElement("img")

image2.src = "./images/pngwing.com.png"

image2.width = "300"

let pokemonArray = pokemons;

let moviesArray = movies.slice(0, 151);

let both = pokemons.concat(moviesArray);

elBtn1.addEventListener("click", function(){

    elList.innerHTML = null;
    
    render(pokemonArray)
   
    elWrapper.appendChild(image1);

    elWrapper2.innerHTML = null;
    
});

elBtn2.addEventListener("click", function(){

    elList.innerHTML = null;
    
    render(moviesArray);

    elWrapper2.appendChild(image2)

   elWrapper.innerHTML = null;


});


elBtn3.addEventListener("click", function(){
   
    elList.innerHTML = null;

    elWrapper.appendChild(imgwrapp)

    render(both)

});

elBtnclean.addEventListener("click", function(){
    elBody.classList = null
    elList.innerHTML = null;
    elWrapper.innerHTML = null;
    elWrapper2.innerHTML = null;
    elList.innerHTML = "<li class=mx-auto ><h2 class=text-center>Cleaned!</h2></li>"
});

// div

var imgwrapp = document.createElement("div");

imgwrapp.classList = "img-wrapper d-flex justify-content-between";

imgwrapp.appendChild(image1);
imgwrapp.appendChild(image2);


function render(array) {

    for (const item of array) {
        
        // li
        let newLI = document.createElement("li");
        
        newLI.classList = "list__item rounded mx-2 my-2";
        
        // img
        
        let newImg = document.createElement("img");
        
        
        newImg.width = "150";

    
        
        // h3
        
        let newh3 = document.createElement("h3");
        
        newh3.classList = "fw-bold";
        
        // p
        
        let newp = document.createElement("p");
        
        newp.classList = "fw-bolder";
        
        // weight
        
        let newh4 = document.createElement("h4");
        
        newh4.classList = "fw-bolder";
        
        // height
        
        let rating = document.createElement("p");
        
        rating.classList = "fw-bolder";

        if (item.name) {
       
            newImg.src = item.img;
            
            newh3.textContent = item.name;
    
            newp.textContent = item.type
            
            newh4.textContent = item.weight;
    
            rating.textContent = item.height;
    
            btnwrapper = null
    
          } else {
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;

            newImg.width = "300"

            newImg.height = "200"
    
            newh3.textContent = item.Title;
      
            newp.textContent = item.Categories;
            
            newh4.textContent = item.imdb_rating;
    
            rating.textContent = item.movie_year;
    
            btnwrapper = true
          }

       
        
        // btns

        var btnwrapper = document.createElement("div");
        
        btnwrapper.classList = "d-flex justify-content-between pb-4"
        
        // btn1
        
    var btn1 = document.createElement("a")
        
        btn1.id = `https://www.youtube.com/watch?v=${item.ytid}`
        
        btn1.textContent = "Watch trailer"
        
        btn1.classList = "btn btn-outline-danger"
        
        // btn2
        
        var btn2 = document.createElement("button")
        
        btn2.textContent = "Bookmark"
        
        btn2.classList = "btn btn-outline-success"
        
        // btn3
        
        var btn3 = document.createElement("button")
        
        btn3.classList = "btn btn-outline-primary"
        
        btn3.textContent = "More info"

        btnwrapper.appendChild(btn1);
        btnwrapper.appendChild(btn2);
        btnwrapper.appendChild(btn3)

    
      
    //   if (btnwrapper == true) {
    //     newLI.appendChild(btnwrapper)
    //   }


        // appendchild
        
        newLI.appendChild(newImg);
        
        newLI.appendChild(newh3);
        
        newLI.appendChild(newp);
        
        newLI.appendChild(newh4);
        
        newLI.appendChild(rating);
               
        elList.appendChild(newLI);
        
        
        
        elBody.classList = "bg-warning";

    }

   

}





//     if(!(item.name)) {
//         elWrapper.appendChild(image2)
//     }
