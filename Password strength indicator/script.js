const btn=document.querySelector(".temp button");
const strength=document.querySelector("#strength");
const pass_box=document.querySelector("#password");
const p=document.querySelector(".parent p");

function isValidPassword(password) {
    return /[a-zA-Z]/.test(password) && /\d/.test(password);
}

function StrengthIndicator(){
    p.style.display="block";
    let pass=document.querySelector("#password").value;
    if(pass.length==0){
        p.style.display="none";
    }
    if(pass.length<6 && isValidPassword(pass)==false){
        strength.style.color="red";
        strength.innerHTML="Weak";
        pass_box.style.borderColor="red";
    }
    else if(pass.length<6 && isValidPassword(pass)==true){
        strength.style.color="yellow";
        strength.innerHTML="Medium";
        pass_box.style.borderColor="yellow";
    }
    else if(pass.length>=6 && isValidPassword(pass)==false){
        strength.style.color="yellow";
        strength.innerHTML="Medium";
        pass_box.style.borderColor="yellow";
    }
    else{
        strength.style.color="green";
        strength.innerHTML="Strong!";
        pass_box.style.borderColor="green";
    }
}
document.querySelector("body:not(.parent)").addEventListener("click",()=>{
    if(pass_box.value==""){
        pass_box.style.borderColor="white";
    }
})