// Your code goes here
busImg = document.querySelector(".intro img");
busImg.addEventListener("click", (event) => {
    event.target.style.opacity = "0.5";
});

signupBtn = document.querySelectorAll(".btn");

signupBtn[0].addEventListener("dblclick", (event) => {
    event.target.textContent = "Enrolled";
});

signupBtn[0].addEventListener("auxclick", (event) => {
    event.target.textContent = "Sign Me Up!";
});

bottomImg = document.querySelector(".content-destination img");
bottomImg.addEventListener("mouseover", (event) => {
    event.target.style.display = "none";
});

userSelection = document.querySelectorAll(".destination");
userSelection[1].addEventListener("click",  (event) => {
    event.target.parentElement.style.background = "#e3e3e3";
});

footerAction = document.querySelector(".footer");

footerAction.addEventListener("mouseenter", (event) => {
    event.target.style.background = "#17A2B8";
});

footerAction.addEventListener("mouseleave", (event) => {
    event.target.style.background = "#FFEBCD";
});