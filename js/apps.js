const link = document.querySelectorAll('.nav__link');
const input= document.querySelector(".nav__input");




link.forEach(element => {
    element.addEventListener("click", function(event){
if(input.checked){
input.checked= false
}
}) 
});