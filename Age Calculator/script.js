const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);
const showAge=document.querySelector("#show-age");
const calculate_btn=document.querySelector("#Calculate");

calculate_btn.addEventListener("click",()=>{
    const User_input_date=new Date(document.querySelector("#date").value);
    const d1=User_input_date.getDate();
    const m1=User_input_date.getMonth()+1;
    const y1=User_input_date.getFullYear();
    const today=new Date();
    const d2=today.getDate();
    const m2=today.getMonth()+1;
    const y2=today.getFullYear();

    let year=y2-y1;
    let month,date;
    if(m2>=m1){
        month=m2-m1;
    }
    else{
        year--;
        month=12+m2-m1;
    }

    if(d2>=d1){
        date=d2-d1;
    }
    else{
        month--;
        date=getDate(y1,m1) + d2-d1;
    }
    
    if(month<0){
        month=11;
        year--;
    }
    
    if(year==0 && month==0){
        showAge.innerHTML=`You are <span>${date}</span> days old!`;
    }
    else if(year==0 && date==0){
        showAge.innerHTML=`You are<span>${month}</span> months old!`;   
    }
    else if(month==0 && date==0){
        showAge.innerHTML=`You are <span>${year}</span> years old!<br> <br><h2>Today's your <span style="color:orange;">Birthday</span>!!</h2><br><br><h1> Happy <span style="color:orange;">Birthday</span>! 🙂</h1> `; 

    }
    else if(date==0){
        showAge.innerHTML=`You are <span>${year}</span> years <span>${month}</span> months old!`;
    }
    else if(month==0){
        showAge.innerHTML=`You are <span>${year}</span> years <span>${date}</span> days old!`;
    }
    else if(year==0){
        showAge.innerHTML=`You are <span>${month}</span> months and <span>${date}</span> days old!`;
    }
    else if(month==0 && date==0 && year==0){
        showAge.innerHTML=`You were born today!`;
    }
    else {
        showAge.innerHTML=`You are <span>${year}</span> years <span>${month}</span> months and <span>${date}</span> days old!`;    
    }
})


function getDate(year,month){
    return new Date(year,month,0).getDate();
}