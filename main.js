const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const slides = document.querySelectorAll(".slide");
const container = document.getElementById("container")

let index = 0;

function changeSlide() {
    if(index > slides.length-1) {
        index = 0
    }else if (index<0) {
        index=slides.length-1
    }

    width = slides[0].offsetWidth
    container.style.transform = `translateX(${-index*width}px)`

}

leftBtn.addEventListener('click',()=>{
    index--;
    changeSlide()
})

rightBtn.addEventListener('click',()=>{
    index++;
    changeSlide()
})