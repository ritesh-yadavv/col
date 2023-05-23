const btns = document.querySelectorAll(".btns");
const input_screen =document.querySelector(".input-screen");
const clear_btn = document.querySelector(".clear-btn");
const equal = document.querySelector(".equal");

let screen_value="";
btns.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        screen_value += btn.value;
        input_screen.value = screen_value;
        if(btn.innerHTML =="="){
            let result = eval(screen_value);
            screen_value = result.toFixed(0);
            input_screen.value = screen_value;
        }
    });
});
clear_btn.addEventListener("click",() =>{
    screen_value = "";
    input_screen.value = screen_value;
});