"use strict";

function getReverseStr(str) {
    
    let arr = str.split("");

    console.log(arr);

    let arr1 = arr.reverse();

    console.log(arr1);

    let name =  arr1.join("");

    console.log(name);
}

getReverseStr("Cavid");