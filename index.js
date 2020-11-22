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

let i2 = 29;

while (i2>=29 && i2<=60) {
    i2++
    console.log (i2);    
}

let a = 12

while (a<=670) {
   if(a%10==0) {
       console.log(a)
   }
   a++
}

let s = 10;

for( s=10; s<=100; s++) {
    console.log(s);
}

const arr6 = [1,6,8,14,0,4];
let d = 0;

for(d=0; d<arr6.length; d++) {
    if(arr6[d]>3 && arr6[d]<10) {
        console.log(arr6[d]);
    }
}

const arr8 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

for(let g = 0; g<arr8.length; g++) {
    if(arr8[g]=='Sunday' || arr8[g]=='Saturday') {
        console.log('%c%s', 'font-weight:bold;', arr8[g]);
    }
    else {
        console.log(arr8[g]);
    }
}

const arr7 = [1,2,3,4,5,6,7,8,9];

let str7 = '-';

for (let i7 = 0; i7<arr7.length; i7++) {
    str7 = str7 + arr7[i7]+'-';  
}
console.log(str7);

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let d9= new Date();
let day = d9.getDay();
let i9 = 0;

for (let i9 = 0; i9<week.length; i9++) {
    if (i9==day) {        
    document.write(`<p><i>${week[i9]}</i></p>`);
    }
    else {
        document.write(`<p>${week[i9]}</i></p>`);
    }
}

console.log (week[i9]);

const n = 1000;
let newN = n;
let num = 0;

for (let i10 = 0; newN>=50; i10++) {
    newN = newN/2;
    num++;
}

console.log(newN)
console.log(num);




