"use strict";
//let num = 3;
//alert(num);

//let a = 10;
//let b = 2;
//alert(a+b);
//alert(a-b);
//alert(a/b);
//alert(a*b);

//let c = 15;
//let d = 2;
//let result = c+d;
//alert(result);

//let a = 10;
//let b = 2;
//let c = 5;
//alert(a+b+c);

//let a = 17;
//let b = 10;
//let c = (a-b);
//let d = 7;
//let result = c+d;
//alert (result);

//let str = "Привет, Мир!";
//alert(str);

//let str1 = "Привет";
//let str2 = "Мир!"
//alert(str1+","+str2);

//let name = "Evgeniya";
//alert(`Привет, ${name}!`);

//let age = 31;
//alert(`Мне ${age} год!`);

//let i = 29;

//while (i>=29 && i<=60) {
    //i++
   // console.log (i);    
//}

//let a = 12

//while (a<=670) {
   //if(a%10==0) {
       //console.log(a)
   //}
   //a++
//}

//let s = 10;

//for( s=10; s<=100; s++) {
    //console.log(s);
//}

//const arr = [1,6,8,14,0,4];
//let d = 0;

//for(d=0; d<arr.length; d++) {
    //if(arr[d]>3 && arr[d]<10) {
        //console.log(arr[d]);
    //}
//}

//const arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

//for(let g = 0; g<arr.length; g++) {
    //if(arr[g]=='Sunday' || arr[g]=='Saturday') {
        //console.log('%c%s', 'font-weight:bold;', arr[g]);
    //}
    //else {
        //console.log(arr[g]);
    //}
//}

const arr7 = [1,2,3,4,5,6,7,8,9];

let str7 = '-';

for (let i7 = 0; i7<arr7.length; i7++) {
    str7 = str7 + arr7[i7]+'-';  
}
console.log(str7);

const arr9 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var myDate= new Date();
var day = arr9[myDate.getDay];
console.log(day);

for (let i9 = 0; i9<arr9.length; i9++) {
        if (day==arr9[i9]) {        
        console.log('%c%s','font-weight:Italic;',arr9[i9]);
    }
    
}





