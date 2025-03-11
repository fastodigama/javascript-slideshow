// variables
var current = 0;
var total = 4;


//Get DOM Elements

var nextButton = document.getElementById("next");
var slideImgs = document.getElementsByClassName("slide");
var previousButton = document.getElementById("previous")
var current = 0;

//function to hide all slide images using for loop
function hideAllSlides(){
    for(i = 0; i<total;i++){
        slideImgs[i].style.display="none";
    }
}
//function that receives the current slide as an input and display it.
function displayCurrentSlide(CurrentSlideID){
    slideImgs[CurrentSlideID].style.display = "block";

}
//function for next button, it will increment the current var, checkes if it is bellow or equal to the boundry(total)
//and send the current index to displayCurrentSlide function
function buttonNextClicked(){
    console.log("next");
    current+=1;
    console.log(current);
    
    hideAllSlides(); //hide all slides
    
    if(current >= total){
        current=0;
        console.log(current);
        }
        displayCurrentSlide(current);
}

//function for previous button, it will decrese the current var, check if it is bellow 0 out of boundry(-1)
//and send the current index to displayCurrentSlide function
function previousButtonClicked(){
    console.log("previous");
    hideAllSlides();
    current-=1;
    console.log(current);
    if (current<0){
        current = (slideImgs.length) - 1;
        console.log(current);
    }
    displayCurrentSlide(current);
}

//setInterval to rotate through slides every 5 seconds
setInterval(buttonNextClicked, 5000); 

//Listeners
nextButton.onclick=buttonNextClicked;
previousButton.onclick=previousButtonClicked;
