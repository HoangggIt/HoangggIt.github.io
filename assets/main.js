let slideIndex = 1;
const slides = document.querySelectorAll(".slide");

slidesShow(slideIndex);
function plusSlide(n){
        slidesShow(slideIndex+=n);
}
function slidesShow(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    else if(n<1){
        slideIndex = slides.length;
    }
    slides.forEach(function(slide){
        slide.style.display = "none";
    })
    slides[slideIndex - 1].style.display = "block";
} 

setInterval(function(){
        for(let slide of slides){
            slide.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slideIndex++;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        if(slideIndex < 1){
            slideIndex = slides.length;
}
}, 2000)