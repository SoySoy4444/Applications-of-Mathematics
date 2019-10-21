/*jslint devel: true, browser: true*/
/*jslint node: true */

"use strict";

var score = 0;
var questions = [
    {
        question: "4arcsin(x)=pi",
        choiceA: "x=22sqrt(2)",
        choiceB: "x=2",
        choiceC: "$x=1/sqrt(2)",
        choiceD: "x=1/2",
        correct: "C",
        difficulty: 2,
        answerEquation: true,
        questionEquation: true
    }, {
        question: "What is the equation for beta decay of carbon-14?",
        choiceA: "FALSE",
        choiceB: "TRUE",
        choiceC: "FALSE",
        choiceD: "FALSE",
        correct: "B",
        difficulty: 1,
        answerEquation: false,
        questionEquation: false
    }, {
        question: "Which of these is a complex number?",
        choiceA: "2-i",
        choiceB: "-30i",
        choiceC: "pi",
        choiceD: "All of them",
        correct: "D",
        difficulty: 2,
        answerEquation: false,
        questionEquation: false
    }, {
        question: "Good job!",
        choiceA: "😊",
        choiceB: "😊",
        choiceC: "😊",
        choiceD: "😊",
        correct: "😊",
        answerEquation: false,
        questionEquation: false
    }
];

function updateScore(difficulty) {
    score += difficulty;
    var scorediv = document.getElementById("score");
    scorediv.innerHTML = score;
}

var currentQuestion = 0;

function render(currentQuestion) {
    var choiceA = document.getElementById("A");
    var choiceB = document.getElementById("B");
    var choiceC = document.getElementById("C");
    var choiceD = document.getElementById("D");

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

    if (currentQuestion === questions.length - 1) {
        // finish();
    }
}

function check(answer) {
    if (answer === questions[currentQuestion].correct) {
        alert("Correct!");
        updateScore(questions[currentQuestion].difficulty);
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
