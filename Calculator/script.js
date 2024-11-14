const buttons = document.querySelectorAll(".row button");
const display = document.querySelector(".top");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const operators = ["+", "-", "*", "/"];

        if (button.innerHTML == "AC") {
            display.innerHTML = "";
        }

        else if (button.innerHTML == "Del") {
            display.innerHTML = display.innerHTML.toString().slice(0,display.innerHTML.length-1);
        }

        else if (button.innerHTML == "=") {
            if(display.innerHTML!=""){
                display.innerHTML = eval(display.innerHTML);
            }
        }

        else if(button.innerHTML == "0" || button.innerHTML=="00"){
            const lastChar = display.innerHTML.slice(-1);

            if (lastChar != "*" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "") {
                display.innerHTML += button.innerHTML;
            }
        }

        else if(button.innerHTML=="."){
            const lastChar=display.innerHTML.toString().slice(-1);
            if(lastChar=="." || operators.includes(lastChar)){
                display.innerHTML=display.innerHTML.toString().slice(0,display.length());
            }
            else{
                display.innerHTML+=button.innerHTML;
            }
        }
        
        else if (operators.includes(button.innerHTML)) {
            const lastChar=display.innerHTML.toString().slice(-1);
            if(lastChar=="."){
                display.innerHTML=display.innerHTML.toString().slice(0,display.innerHTML.length());
            }
            if (operators.includes(lastChar)) {
                display.innerHTML = display.innerHTML.toString().slice(0, -1) + button.innerHTML;
            }
            else if(display.innerHTML==""){
                display.innerHTML=""
            }
            else{
                display.innerHTML+=button.innerHTML;
            }
        }
        
        else{
            display.innerHTML+=button.innerHTML;
        }
    })
})