const fs = require("fs");
var b = document.getElementById("iu");
var c = document.getElementById("ip");
var d = document.getElementById("iu2");
let uval = d.value;
var k = document.getElementById("ie2");
let eval = k.value;
var l = document.getElementById("ip2");
let pval = l.value;
var m = document.getElementById("sb1");
var n = document.getElementById("sb2");
// var path = './lrdata.txt';

// function savefs() {
//     n.onclick(fs.write(path, uval, eval, pval, () => {
//         alert("done");
//     }));
// }
function savefs() {

    const fs = require('fs');

    // Get the HTML input value
    const inputValue = req.body.uval;
    const inputValue2 = req.body.eval;
    const inputValue3 = req.body.pval;

    // Create a new text file
    const file = fs.createWriteStream('input.txt');

    // Write the HTML input value to the text file
    file.write(inputValue);
    file.write(inputValue2);
    file.write(inputValue3);

    // Close the text file
    file.end();
    n.onclick(alert("done"));
}