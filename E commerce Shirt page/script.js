const minus=document.querySelector("#minus");
const plus=document.querySelector("#plus");
const quantity=document.querySelector(".showamount");
const points = document.querySelectorAll(".points span")
const image=document.querySelector("#image");
const add_to_cart=document.querySelector("#add-to-cart");
const colors=document.querySelectorAll("input[name='color']")
const sizes=document.querySelectorAll("input[name='size']")
const cart_item=document.querySelector("#cart-items")
let quantity_value=0;
minus.addEventListener("click",()=>{
    let qty=parseInt(quantity.textContent);
    if(qty>0){
        qty=qty-1;
    }
    else{
        qty=0;
    }
    quantity_value=qty;
    quantity.innerHTML=qty;
})
plus.addEventListener("click",()=>{
    let qty=parseInt(quantity.textContent);
    qty++;
    quantity_value=qty;
    quantity.innerHTML=qty;
})

points[0].onclick=function(){
    image.src="https://m.media-amazon.com/images/I/71Qtc0KYlzL._SX679_.jpg"
    if(!points[0].classList.contains("active")){
        points[0].classList.add("active");
    }
    points[1].classList.remove("active");
    points[2].classList.remove("active");
}
points[1].onclick=function(){
    if(!points[1].classList.contains("active")){
        points[1].classList.add("active");
    }
    points[0].classList.remove("active");
    points[2].classList.remove("active");
    image.src="https://m.media-amazon.com/images/I/61KUmnk7dnL._SY879_.jpg"
}
points[2].onclick=function(){
    if(!points[2].classList.contains("active")){
        points[2].classList.add("active");
    }
    points[0].classList.remove("active");
    points[1].classList.remove("active");
    image.src="https://m.media-amazon.com/images/I/61GCdjVyMIL._SY879_.jpg"
}
let colorvalue="";
colors.forEach((color)=>{
    color.addEventListener("change",()=>{
        colorvalue=color.value;        
    })
})
let size_value="";
sizes.forEach((size)=>{
    size.addEventListener("change",()=>{
        size_value=size.value;
    })
})

add_to_cart.addEventListener("click",()=>{
    if(size_value!="" && colorvalue!="" && quantity_value!=0){
        let cart_item_value=parseInt(cart_item.textContent);
        cart_item_value++;
        cart_item.innerHTML=cart_item_value;
        colors.forEach((color)=>{
                color.checked=false;  
        })
        sizes.forEach((size)=>{
                size.checked=false;
        })
        quantity.innerHTML=1;

    }
    else{
        alert("Select all the attributes first!");
    }
})