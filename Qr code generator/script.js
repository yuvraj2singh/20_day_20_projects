const generate_btn=document.querySelector(".generate");
const qr_box=document.querySelector(".qr-code");
generate_btn.addEventListener("click",()=>{
    const input = document.querySelector(".parent input");
    if(input.value==""){
        input.classList.add("error");
        qr_box.classList.add("showImg");
        qr_box.innerHTML=`<p style="color:red;">Url or text is required!</p>`;
        setTimeout(() => {
            input.classList.remove("error");
            qr_box.innerHTML='';
        }, 1000);
    }
    else{
        const imgQr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        const img = `<img src="${imgQr}" alt="QR Code">`;
        qr_box.innerHTML = img;
        qr_box.classList.add("showImg");
    }
})