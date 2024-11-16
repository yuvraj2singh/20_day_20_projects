const input_text=document.querySelector("#input-text");
const eye = document.querySelector("#eye");

eye.addEventListener('click',()=>{
    if(eye.classList.contains("fa-eye")){
        input_text.type="password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else{
        input_text.type="text";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})