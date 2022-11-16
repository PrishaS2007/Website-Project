// HTML Variables 
let answerEl = document.getElementById("answerEl");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let ans5 = document.getElementById("ans5");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked () {
// Input 
let q1 = document.getElementById("q1").value.toLowerCase;
let q2 = document.getElementById("q2").value.toLowerCase;
let q3 = document.getElementById("q3").value.toLowerCase;
let q4 = document.getElementById("q4").value.toLowerCase;
let q5 = document.getElementById("q5").value.toLowerCase;

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let ans5 = document.getElementById("ans5");

if (q1 === "red sea" || q1 === "the red sea" ){
ans1.innerHTML = "Correct!"; 
} if (q2 === "aggressive"){
ans2.innerHTML = "Correct!";
} if (q3 === "endangered"){
ans3.innerHTML = "Correct!";
} if (q4 === "more than 50 years" || q4 === "50 years"){
ans4.innerHTML = "Correct!";
} if (q5 === "up to 40ft" || q5 === "40ft" ){
ans5.innerHTML = "Correct";
}
}