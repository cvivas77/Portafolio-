const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () =>{
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
})