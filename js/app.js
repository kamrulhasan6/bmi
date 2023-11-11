let height =Number(prompt('Enter your height'));
let weight =Number(prompt('Enter your weight'));

let bmi= weight/((height*0.3048)**2);

if(bmi<18.5){
  document.querySelector('h1').innerText='Underweight';
}else if(bmi>=18.5 && bmi<=24.99){
    document.querySelector('h1').innerText='Normal weight';
}else if(bmi>=25 && bmi<=29.99){
    document.querySelector('h1').innerText='Overweight';
}else if(bmi>=30 && bmi<=34.99){
    document.querySelector('h1').innerText='Class 1 Obesity';
}else if(bmi>=35 && bmi<=39.99){
    document.querySelector('h1').innerText='Class 2 Obesity';
}else if(bmi>=40){
    document.querySelector('h1').innerText='Class 3 Obesity';
}