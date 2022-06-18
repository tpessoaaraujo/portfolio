const body = document.querySelector('body');
const lightMode = document.querySelector(".buttonLight");
const iconMode = document.querySelector(".iconMode");

const onLightMode = () => {
    body.classList.toggle("lightMode");
    iconMode.classList.toggle("fa-sun")
    iconMode.classList.toggle("fa-moon")
}