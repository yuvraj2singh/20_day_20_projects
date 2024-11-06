const generate=document.querySelector(".generate");
const copy_btn=document.querySelector('.copy_btn');
const text_box=document.querySelector(".text");
const copy_check=document.querySelector(".copycheck");
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const Symbols="~!@#$%^&*()_+=-|/?><"
const arr=[upperCaseLetters,lowerCaseLetters,numbers,Symbols];
const length=12;


generate.addEventListener("click",()=>{
    let password="";
    password+=upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    password+=lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    password+=numbers.charAt(Math.floor(Math.random() * numbers.length));
    password+=Symbols.charAt(Math.floor(Math.random() * Symbols.length));

    while(password.length<length){
        let inst=arr[Math.floor(Math.random() * arr.length)];
        password+=inst.charAt(Math.floor(Math.random() * inst.length));
    }
    text_box.innerHTML=password;
})

if(text_box.length!=0){
    copy_btn.addEventListener("click", () => {
        const password = text_box.innerHTML;
        navigator.clipboard.writeText(password)
        copy_check.style.opacity=1;
        setTimeout(() => {
            copy_check.style.opacity=0;
        }, 1000);
    });
}