/*jslint devel: true, browser: true*/
/*jslint node: true */
/*jslint plusplus: true */

"use strict";

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

function getInclusiveRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load() {
    document.getElementById("loading").style.display = "block";
    var progressBar = document.getElementById("progressBar"),
        progressBarValueAttribute = Number(progressBar.getAttribute("value")),
        progressBarMaxAttribute = progressBar.getAttribute("max"),
        newValue = progressBarValueAttribute;

    setInterval(function () {
        document.getElementById("loading").innerHTML = `Loading... ${progressBarValueAttribute}%`;
        if (progressBarValueAttribute <= Number(progressBarMaxAttribute)) {
            newValue += getInclusiveRandomInt(3, 10);
            progressBar.setAttribute("value", newValue);
            progressBarValueAttribute = Number(progressBar.getAttribute("value"));
        } else {
            clearInterval();
            document.getElementById("loading").style.display = "none";
            document.getElementById("progressBar").style.display = "none";
            document.getElementById("startLoad").setAttribute("disabled", "");
        }
    }, getInclusiveRandomInt(200, 1500));
}