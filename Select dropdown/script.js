const select=document.querySelector(".select p");
const select_box=document.querySelector(".select");
const options=document.querySelectorAll(".opt");
const options_parent=document.querySelector(".options");
const image=document.querySelector("#image");
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        select.innerHTML=option.innerHTML;
        options_parent.classList.toggle("hide");
        image.classList.toggle("rotate");
    })
})

select_box.addEventListener("click",()=>{
    options_parent.classList.toggle("hide");
    image.classList.toggle("rotate");
})