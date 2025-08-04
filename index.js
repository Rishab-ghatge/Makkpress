let arrows = document.querySelectorAll(".arrow");
let answers = document.querySelectorAll(".faq-answer");
let hamburger  = document.querySelector(".hamburger")
let mobile = document.querySelector(".mobile-nav")
let closebtn = document.querySelector(".close")

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    console.log(index);
    answers[index].classList.toggle("invis");
    arrow.classList.toggle("rotate");
  });
});

hamburger.addEventListener("click",()=>{
  // mobile.style.display = "block";
  mobile.style.display = "flex";
  mobile.style.flexDirection = "column";
  mobile.style.transform = "translateX(0%)";
})

closebtn.addEventListener("click",()=>{
  mobile.style.transform = "translateX(110%)";
})