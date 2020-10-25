const bullets = document.querySelectorAll(".bullet i");
const carousel = document.querySelector('.carousel-inner');
const textContainer = document.querySelector('.text-container');
const bulletContainer = document.querySelector('.carousel-bullet');

bullets.forEach((v,i)=>{
    v.addEventListener("click", (e) => {
        bullets.forEach(v=>{v.classList=""})
        carousel.style.marginLeft = `${i * (-270)}px`;
        bullets[i].classList = "active"
    }, false)
})

setTimeout(()=>{
    textContainer.classList += " done";
    bulletContainer.classList += " done";
},6000)