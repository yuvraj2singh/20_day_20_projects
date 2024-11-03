const input=document.querySelector(".inpbox input");
const addbutton=document.querySelector(".inpbox span button");
const taskbox=document.querySelector('.task-box');
const task=document.querySelectorAll('.task');
addbutton.addEventListener('click',(e)=>{
    if(input.value===""){
        alert("Task can't be empty");
    }
    else{
        let isDefault=true;
        let div=document.createElement('div');
        div.classList='task';
        div.innerHTML=input.value+`<span><button>Remove</button></span></div>`;
        taskbox.appendChild(div)
        input.value="";
        const rembutton = div.querySelector("span button");
            rembutton.addEventListener('click', () => {
                taskbox.removeChild(div); 
            });
            div.addEventListener('click', () => {
                div.classList.toggle('strike-through');
                if(isDefault){
                    div.style.setProperty("--task-icon", "url('/To do list/images/icons8-tick-in-circle-50.png')");
                    div.style.opacity='.5'
                    isDefault=false;
                    saveContent();
                }
                else{
                    div.style.opacity='1'
                    div.style.setProperty("--task-icon", "url('/To do list/images/icons8-circle-50.png')");
                    isDefault=true;   
                    saveContent();
                }
            });
        }
        saveContent();
    })
    
function saveContent(){
    localStorage.setItem('data',taskbox.innerHTML);
}

function showContent(){
    taskbox.innerHTML=localStorage.getItem('data');
}

showContent();