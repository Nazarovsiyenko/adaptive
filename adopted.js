const burger = document.querySelector(".burger");
const headerBg = document.querySelector(".header__bg");
const headerContent = document.querySelector(".header__content");

burger.addEventListener("click", () => {
    burger.classList.toggle("_active"); 
    headerBg.classList.toggle("_active"); 
    headerContent.classList.toggle("_active");
    body.classList.toggle("_lock") 
});


