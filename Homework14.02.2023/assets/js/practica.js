"use strict";


// let address = "Ehmedli";

//let address1 = "Gence boyuk seherdir";

//console.log(address.length);

//console.log(address[0]);

// for (let i = 0; i < address.length; i++) {

//     console.log(address[i]);

// }

// console.log(address.charAt(0));

// console.log(address.charCodeAt());

// console.log(address.toUpperCase());

// console.log(address.toLowerCase());

// console.log(address1.split(" "));

// console.log(address.trim());

// console.log(address.trimStart());

// console.log(address.trimEnd());

// console.log(address.slice(1,3));

// console.log(address.slice(1));

// console.log(address.slice(-2));

// console.log(address.substring(1,3));

// let text = "dkknckjbnwcbsedcfbdecbkdhcbkadsbcalvbcaibclabdcasbclabca";

// if (text.length > 10) {
//     console.log(text.substring(1,10)+ "..." )
// }


//console.log(address.substr(1,3));

//let text = "Salam Anar bey Anar";

// console.log(text.replace("Anar","Mubariz"));

// console.log(text.replaceAll("Anar","Mubariz"));

// let text1 = "Hello";

// let text2 = " World"

// let res = text1.concat(text2);

// console.log(res);

// const strToUpper = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(strToUpper("salam"));

// let text = "salam";

// let result =  text[0].toUpperCase();

// let res = text.replace(text.charAt(0),result);

// console.log(res);


// let students = ["Ravid", "Jale", "roya", "Konul", "Cinare", "Anar"];

// let text = "R";

// function filter(arr,text) {

//     let result = [];

//     for (const item of arr) {

//         if(item.toLowerCase().startsWith(text.toLowerCase())) {

//             result.push(item)
            
//         }
        
//     }
 
//           return result;
// }

// console.log(filter(students,text));




// console.log(students.length);

// console.log(students[students.length - 1]);

// let result = students.join();

// console.log(result);


// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare","Jale", "Anar"];

// students.push("Elekber");

// students.shift();

// students.unshift("Mirze");

// students.pop();

// console.log(students);

// console.log(students.indexOf("Jale"));

// console.log(students.lastIndexOf("Jale"));

// let result = students.find(m => m == "Jale");

// console.log(result);

// let res = students.sort();

// students.reverse(); 

// console.log(res);

// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare","Jale", "Anar"];

//students.fill("Eli");

// students.fill("Eli",0,3)

// console.log(students);

//students.fill("Jale");
 
//console.log(students.every(m=>m =="Jale"))

// let arr = [10,20,30,10,20,30,40]

// console.log(arr.every(m=>m > 4));

// let arr = [4,5,10,20,30,40]

// console.log(arr.findIndex(m=> m > 20));

//console.log(arr.includes(20));

//console.log( Array.isArray(arr));

// console.log(arr.slice(2))

// const fruits = ["banana", "orange", "apple", "mango"];

// fruits.splice(2, 2, "Lemon" ,"Kiwi");

// console.log(fruits);

// let age = 55;

// console.log(typeof age.toString());

//  let age = "55";

// console.log(typeof Number(age));

//console.log(typeof parseInt(age));

// function getNums(num1 ,...arr) {

//     console.log(arr)
    
// }

// getNums(1,2,3,4,5,6)

// let getNums = (...arr) => {

//     console.log(arr)
// }

// getNums(1,2,3,4,5)

// let arr =[1,2,3,4,5]

// let copyArr = [...arr]

// console.log(copyArr);

// arr[0]=10;

// console.log(arr);