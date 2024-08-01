"use strict";
let $ = (id) => {
  return document.getElementById(id);
};

//Accessing DOM Elements
let Name = $("Name");
let weight = $("weight");
let height = $("height");
let subButton = $("subBtn");
let loading = $("loading");
let outputMesg = $("output");
let body = document.querySelector("body");

//variables used in this program
let Name_input, weight_input, height_input;

subButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (Name.value === "" || weight.value === "" || height.value === "") {
    alert("required field should not be empty");
    return;
  }
  Name_input = Name.value;
  if (weight_input < 1) {
    alert("Weight cannot be 0 or negative! Please enter correct data!");
    return;
  }
  weight_input = weight.value;
  if (height_input < 1) {
    alert("Height cannot be 0 or negative! Please enter correct data!");
    return;
  }
  height_input = height.value;
  calculateBMI();
  Name.value === "";
  weight.value === "";
  height.value === "";
  // body.style.backgroundColor = "red";
});

const calculateBMI = () => {
  //bmi = weight / Math.pow(height,2);

  setTimeout(() => {
    loading.innerText = "Calculating .";
  }, 1000);

  setTimeout(() => {
    loading.innerText = "Calculating ..";
  }, 3000);

  setTimeout(() => {
    loading.innerText = "Calculating ...";
  }, 5000);

  setTimeout(() => {
    loading.innerText = "Results:";
    let BMI = weight_input / Math.pow(height_input, 2);
    if (BMI < 18.5)
      outputMesg.innerText = `${Name_input} your BMI is ${BMI.toFixed(
        1
      )}, you are UNDERWEIGHT.`;
    else if (BMI >= 18.5 && BMI <= 24.9)
      outputMesg.innerText = `${Name_input} your BMI is ${BMI.toFixed(
        1
      )}, you are NORMAL WEIGHT.`;
    else if (BMI >= 25 && BMI <= 29.9)
      outputMesg.innerText = `${Name_input} your BMI is ${BMI.toFixed(
        1
      )}, you are OVERWEIGHT.`;
    else if (BMI >= 30 && BMI <= 34.9)
      outputMesg.innerText = `${Name_input} your BMI is ${BMI.toFixed(
        1
      )}, you are OBESE.`;
    else if (BMI >= 35) {
      outputMesg.innerText = `${Name_input} your BMI is ${BMI.toFixed(
        1
      )}, you are EXTREMLY OBESE.`;
    } else {
      outputMesg.innerHTML =
        "<i>Error in calculating BMI, Make sure you have entered correct data<i>";
    }
  }, 7000);
};
