const inputDivs = document.querySelectorAll(".inputdiv");
const option_text = document.querySelectorAll(".text");
const next_btn = document.querySelector(".next button");
const question = document.querySelector(".question");
const parent = document.querySelector(".parent");
const heading = document.querySelector(".heading");
const opt_arr = [
  ["Who is founder of Facebook?","Bill Gates","Mark Zukerberg","Ashish Chanchalani","Harsh Beniwal","Mark Zukerberg"],
  ["When India got Independence?", "1945", "1946", "1947", "1948", "1947"],
  ["3rd Nearest country to Sun is ?","Earth","Mars","Saturn","Mercury","Earth"],
  ["When was Pluto removed from Solar System?","2003","2004","2005","2006","2006"],
];

let question_number = 2;
let count = 0;
let selectionMade = false;
let score = 0;
let click_count = false;

inputDivs.forEach((input) => {
  input.addEventListener("click", () => {
    click_count = true;
    if (selectionMade) return;
    const radioInput = input.querySelector('input[type="radio"]');
    if (radioInput) {
      radioInput.checked = true;
    }
    if (
      input.querySelector(".text").innerHTML ===
      opt_arr[count][opt_arr[count].length - 1]
    ) {
      score++;
      input.style.backgroundColor = "green";
    } else {
      inputDivs.forEach((input1) => {
        if (
          input1.querySelector(".text").innerHTML ===
          opt_arr[count][opt_arr[count].length - 1]
        ) {
          input1.style.backgroundColor = "green";
        }
      });
      input.style.backgroundColor = "red";
    }
    selectionMade = true;
  });
});

next_btn.addEventListener("click", () => {
  if (click_count) {
    count++;
    if (count <= opt_arr.length - 1) {
      question.innerHTML = question_number + ". " + opt_arr[count][0];
      for (let i = 0; i < inputDivs.length; i++) {
        for (let j = 1; j < opt_arr[i].length - 1; j++) {
          inputDivs[j - 1].querySelector(".text").innerHTML = opt_arr[count][j];
        }
      }
      selectionMade = false;
      inputDivs.forEach((input) => {
        input.style.backgroundColor = "#c8bebe";
      });
    } 
    else {
      heading.innerHTML = "Result";
      let percent_value = 0;
      if (score / opt_arr.length - parseInt(score / opt_arr.length) == parseFloat(0)){
        percent_value = (score / opt_arr.length) * 100;
      }
       else {
        percent_value = ((score / opt_arr.length) * 100).toFixed(2);
      }
      parent.innerHTML = `
      <div class="question" style="text-align: center; font-size:3rem; border-bottom: 2px solid black; padding-bottom:10px ;">
        Your Score is 
      </div>
      <div class="options" style="margin-top:20px; justify-content:center; align-items:center;">
        <span style="margin:5px; font-size:1.3rem;"><span style="color:green;">${score}</span>/${opt_arr.length}</span>
        <span class="per_cent" style="margin:5px; font-size:1.3rem; color:green;">${percent_value} %</span>
    </div>`;
      if (score < opt_arr.length / 2) {
        parent.querySelector(".options span span").style.color = "red";
        parent.querySelector(".options .per_cent").style.color = "red";
      }
    }
    question_number++;
  } 
  else {
    alert("Select atleast one!");
  }
  click_count = 0;
});
