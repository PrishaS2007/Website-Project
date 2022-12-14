// HTML Variables 
let score = 0;
let msg = document.getElementById("msg");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked () {
// Input 
let q1 = document.getElementById("q1").value.toLowerCase();
let q2 = document.getElementById("q2").value.toLowerCase();
let q3 = document.getElementById("q3").value.toLowerCase();
let q4 = document.getElementById("q4").value.toLowerCase();
let q5 = document.getElementById("q5").value.toLowerCase();

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let ans5 = document.getElementById("ans5");

if (q1 === "red sea" || q1 === "the red sea" ){
ans1.innerHTML = "Correct!"; 
score++;
} else {
ans1.innerHTML = "Incorrect!";
}
 if (q2 === "aggressive"){
ans2.innerHTML = "Correct!"; 
score++;
} else {
ans2.innerHTML = "Incorrect!"
}
 if (q3 === "endangered"){
ans3.innerHTML = "Correct!";
score++;
} else {
ans3.innerHTML = "Incorrect!"
}
 if (q4 === "more than 50 years" || q4 === "50 years"){
ans4.innerHTML = "Correct!";
score++;
 } else {
ans4.innerHTML = "Incorrect!"
}
 if (q5 === "up to 40ft" || q5 === "40ft" || q5 === "40 ft"){
ans5.innerHTML = "Correct!";
score++;
} else {
ans5.innerHTML = "Incorrect!";
}

// Process
let total = (score) / 5 * 100;


// Encouragement Message
if (score <= 1) {
msg.innerHTML = "Try Again.";
} else if (score == 2 ) {
msg.innerHTML = "You can do better than that!";
} else if (score == 3) {
msg.innerHTML = "Not bad!";
} else if (score == 4) {
msg.innerHTMl = "So close!";
} else if (score == 5) {
msg.innerHTML = "Your a Whale Shark expert!"
}

// Score
document.getElementById("s").innerHTML = score;

// Output
document.getElementById("answerEl").innerHTML = total.toFixed();
}





