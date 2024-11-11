const toast_parent=document.querySelector("#toast-div")

function showToast(msg){
    let toast=document.createElement('div');
    toast.classList.add("toast");
    if(msg.includes("Successfully")){
        toast.innerHTML=`<i class="fa-solid fa-circle-check" style="color:green;"></i>${msg}`;
    }
    if(msg.includes("Error")){
        toast.classList.add("error");
        toast.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color:red;"></i>${msg}`;
    }
    if(msg.includes("Invalid")){
        toast.classList.add("invalid");
        toast.innerHTML=`<i class="fa-solid fa-circle-exclamation" style="color:orange;"></i>${msg}`; 
    }
    toast_parent.appendChild(toast);
    setTimeout(() => {
        toast.remove()
    }, 5000);
}