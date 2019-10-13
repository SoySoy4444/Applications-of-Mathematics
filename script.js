/*jslint devel: true, browser: true*/

"use strict";

var questions = [
    {
        question : "4arcsin(x)=pi",
        choiceA : "x=22sqrt(2)",
        choiceB : "x=2",
        choiceC : "$x=1/sqrt(2)",
        choiceD : "x=1/2",
        correct : "C",
        answerEquation : true,
        questionEquation: true
    }, {
        question : "8x^2-2x-3=0",
        choiceA : "x = 1/2, x=3/4",
        choiceB : "x = -1/2, x = 3/4",
        choiceC : "x = 1/2, x = -3/4",
        choiceD : "x = -1/2, x = -3/4",
        correct : "B",
        answerEquation : true,
        questionEquation: true
    }, {
        question : "Which of these is a complex number?",
        choiceA : "2-i",
        choiceB : "-30i",
        choiceC : "pi",
        choiceD : "All of them",
        correct : "D",
        answerEquation : false,
        questionEquation: false
    }, {
        question: "Good job!",
        choiceA : "😊",
        choiceB : "😊",
        choiceC: "😊",
        choiceD : "😊",
        correct: "😊",
        answerEquation : false,
        questionEquation: false
    }, {
    }
];

var currentQuestion = 0;
function render(currentQuestion) {
    var choiceA = document.getElementById("A");
    /* choiceA.innerHTML = questions[currentQuestion].choiceA; */
    /* choiceA.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceA + "' /> <br>"; */
    
    var choiceB = document.getElementById("B");
    /* choiceB.innerHTML = questions[currentQuestion].choiceB; */
    /* choiceB.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceB + "' /> <br>"; */
    
    var choiceC = document.getElementById("C");
    /* choiceC.innerHTML = questions[currentQuestion].choiceC; */
    /* choiceC.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceC + "' /> <br>"; */

    var choiceD = document.getElementById("D");
    /* choiceD.innerHTML = questions[currentQuestion].choiceD; */
    /* choiceD.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceD + "' /> <br>"; */
    
    if (questions[currentQuestion].answerEquation === true) {
        choiceA.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceA + "' /> <br>";
        choiceB.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceB + "' /> <br>";
        choiceC.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceC + "' /> <br>";
        choiceD.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].choiceD + "' /> <br>";
    } else {
        choiceA.innerHTML = questions[currentQuestion].choiceA;
        choiceB.innerHTML = questions[currentQuestion].choiceB;
        choiceC.innerHTML = questions[currentQuestion].choiceC;
        choiceD.innerHTML = questions[currentQuestion].choiceD;
    }

    var question = document.getElementById("question");
    if (questions[currentQuestion].questionEquation === true) {
        question.innerHTML = "<img src='https://latex.codecogs.com/svg.latex?" + questions[currentQuestion].question + "' /> <br>";
    } else {
        question.innerHTML = questions[currentQuestion].question;
    }
    /* it can only accept equation problems, so use an IF statement to filter "if this is equation" then latex "else" "string". */
    
}

function check(answer) {
    if (answer === questions[currentQuestion].correct) {
        alert("Correct!");
    } else {
        alert("Incorrect");
        /* wrong() */
    }

    currentQuestion = currentQuestion + 1;
    render(currentQuestion);
}

function start() {
    alert("Good luck!");
    render(0);
}


/*
alert("Hi");
var answer = prompt("What is 1 + 1");
if (answer === "2") {
    alert("You're smart!");
} else {
    alert("Did you do reverse psychology?");
}
*/

/*
function wrong() {
    alert("Why did you click! I told you!");
    var background = document.getElementById("A");
    background.style.backgroundColor = "black";
    background.style.color = "red";
    background.innerHTML = "Incorrect";
}
*/

/*
function check() {
    confirm("Are you sure?");
}
*/
