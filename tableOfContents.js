/*jslint devel: true, browser: true*/
/*jslint node: true */
/*jslint plusplus: true */

"use strict";
/*
var h1 = document.getElementsByTagName("h1"),
    h2 = document.getElementsByTagName("h2"),
    h3 = document.getElementsByTagName("h3"),
    headings = document.querySelectorAll("h1, h2, h3"),
    tableOfContents = document.getElementById("tableOfContents"),
    h2List = [],
    headingsList = [],
    finalText = "<ul> \n",
    body = document.getElementById("body"),
    i;
*/

var headings = document.querySelectorAll("h1, h2, h3"),
    headingsList = [],
    finalText = "<ul> \n",
    id,
    i;

/* var headings gives an HTML Heading Object, so to get the text value of that, push all headings[i].textContext  to a list */
for (i = 0; i < headings.length; i++) {
    headingsList.push(headings[i].textContent);
}
/* alert(headingsList); */

/* first heading in an article is always <h1>, so by choosing headingsList[0], it will always select the title of the article. */
document.getElementById("tableOfContentsTitle").innerHTML = headingsList[0] + "Table of Contents \n";

for (i = 0; i < headingsList.length; i++) {
    id = headings[i].id
    if (headings[i].tagName === "H2") {
        finalText += `  <li id='h2'> <a href='#${id}'>` + headingsList[i] + "</a> </li> \n";
    } else if (headings[i].tagName === "H3") {
        finalText += `  <li id='h3'> <a href='#${id}'>` + headingsList[i] + "</a> </li> \n";
    }
}

/*
for (i = 0; i < h2.length; i++) {
    h2List.push(h2[i].textContent);
}

for (i = 0; i < h2List.length; i++) {
    finalText += "  <li> " + h2List[i] + "</li> \n";
}
*/

finalText += "</ul>";
/* alert(finalText); */
document.getElementById("tableOfContents").innerHTML = finalText;