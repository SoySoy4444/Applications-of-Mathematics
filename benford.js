/*jslint plusplus: true */

"use strict";

function benford() {
    var integers = document.getElementById("numbersInput").value, /* get the value of numbersInput, i.e. the textarea */
        integersList = integers.split("\n"), /* create a list of integers */
        counts = [], /* to push (Python equivalent of append) to in the for loop */
        i = 0; /* to iterate in the for loop */
/* 
    alert(integersList[0]);
    alert(integersList[1]);
    alert(integersList[integersList.length - 1]);
*/

    for (i; i < integersList.length; i += 1) {
        counts.push(integersList[i][0]); 
        /* push (append) to counter the 0th letter (leading digit) of the integer of the ith row  */
    }
    
    i = 0;
    var totalCount = counts.length,
        one = 0,
        two = 0,
        three = 0,
        four = 0,
        five = 0,
        six = 0,
        seven = 0,
        eight = 0,
        nine = 0;

    for (i; i < counts.length; i += 1) {
        
        switch (Number(counts[i])) {
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
        case 6:
            six++;
            break;
        case 7:
            seven++;
            break;
        case 8:
            eight++;
            break;
        case 9:
            nine++;
            break;
        }
    }
    
    document.getElementById("counts").innerHTML =
    `
    One appeared ${one} times <br>
    Two appeared ${two} times <br>
    Three appeared ${three} times <br>
    Four appeared ${four} times <br>
    Five appeared ${five} times <br>
    Six appeared ${six} times <br>
    Seven appeared ${seven} times <br>
    Eight appeared ${eight} times <br>
    Nine appeared ${nine} times <br>
    `;
    
    document.getElementById("probabilities").innerHTML =
    `
    One appeared ${(one/totalCount*100).toFixed(2)}% of the time <br>
    Two appeared ${(two/totalCount*100).toFixed(2)}% of the time <br>
    Three appeared ${(three/totalCount*100).toFixed(2)}% of the time <br>
    Four appeared ${(four/totalCount*100).toFixed(2)}% of the time <br>
    Five appeared ${(five/totalCount*100).toFixed(2)}% of the time <br>
    Six appeared ${(six/totalCount*100).toFixed(2)}% of the time <br>
    Seven appeared ${(seven/totalCount*100).toFixed(2)}% of the time <br>
    Eight appeared ${(eight/totalCount*100).toFixed(2)}% of the time <br>
    Nine appeared ${(nine/totalCount*100).toFixed(2)}% of the time <br>
    `;
    
    /*
    alert(one);
    alert(two);
    alert(three);
    alert(four);
    alert(five);
    alert(six);
    alert(seven);
    alert(eight);
    alert(nine);
    */
    
}