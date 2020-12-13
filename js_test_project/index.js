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

/*let i2 = 29;

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
console.log(num);*/

let arr1 = ['a','b','c'];
let arr2 = [1,2,3];
let arr = arr1.concat(arr2);
console.log(arr);

let arr3 = ['a','b','c'];
arr3.push(1,2,3);
console.log(arr3);

let arr4 = [1,2,3];
arr4.reverse();
console.log(arr4);

let arr5 = [1,2,3,4,5];
let arr6 = arr5.slice(0,3);
console.log(arr6);
let arr7 = arr5.slice(3);
console.log(arr7);

let obj1 = {js:'test', jq:'hello', css:'world'};
console.log(Object.keys(obj1));

let arr20 = [1,2,3,4,5];
for(let a =0; a< arr20.length; a++) {    
    let lastindex = arr20.pop();
    arr20.unshift(lastindex);
    console.log(arr20);
       
} 

let arr8 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for(let y = 0; y < arr8.length; y++) {           
    for (let j = 0; j< arr8[y].length; j++) {  
        sum+=arr8[y][j];         
    }       
}
console.log(sum); 

let arr45 = [[[1,2],[3,4]],[[5,6],[7,8]]]
let sum45 = 0;

for (let u = 0; u < arr45.length; u++) {
    console.log (arr45[u]);
    for (let s = 0; s < arr45[u].length; s++) {
        console.log(arr45[u][s]);
        for ( let p = 0; p < arr45[u][s].length; p++) {
            console.log(arr45[u][s][p]);
            sum45+=arr45[u][s][p];  
                      
        }
    }
    
}
console.log(sum45);

let arr10_1 = [1,2,3];
let arr10_2 = [1,2,3];

if (arr10_1.length==arr10_2.length) {
    for (let n=0;  n<arr10_1.length; n++) {
        if (arr10_1[n] !=arr10_2[n]) {
            console.log (`false`);
        } else {
            console.log (`true`);
        }
    }
}
let arr10 = [2,3,4,5,6];
let arr11 = arr10.map(x=> x*=x);
console.log(arr11);

let arr12 = [-1,0,2,-5,7,3,-9];
let arr13 = arr12.filter(number=>number>0);
console.log(arr13);

let arr14 = [23,35,67,89,72];
let arr15 = arr14.reduce((sum,number)=>sum+number);
console.log(arr15);

let city1 = {name:"Город2", population: 10000000,};
let city2 = {name:"Город1", population: 1e6,}

console.log(city1);
console.log(city2);

city1.getName = function  () {
    return this.name;
};

city2.getName = function () {
    return this.name;
};

console.log (city1.getName());
console.log (city2.getName());

city1.exportStr = function () {
    return `name = ${this.name} population = ${this.name}`;
};

city2.exportStr = function () {
    return `name = ${this.name} population = ${this.name}`;
};

console.log (city1.exportStr());
console.log (city2.exportStr());

let day = new Date();
let today = day.getDate();
let today_month = day.getMonth();
let now_year = day.getFullYear();
console.log(today);
console.log(today_month);
console.log(now_year);
console.log (now_year+"-"+today_month+"-"+today);

const olddate = new Date();
console.log(olddate.getTime()/1000/60);  

//DOM-часть
function buttonClick5() {
    var input5 = document.getElementById('input5');
    alert(input5.value);
}

function buttonClick6() {
    var input6 = document.getElementById('input6');
    input6.value = `Ой, я поменял текст`;
}

function buttonClick7 () {
    var img_7 = document.getElementById('img7_1');
    
}

function click8 () {
    let i8 = document.getElementById("input8").value;
    alert(i8);
}

function click9 () {
    document.getElementById("input9").value = "ой, я поменял текст";    
}

function onmousedown10 (elem10) {
    elem10.value = "ой, я поменял текст";   
} 

function onmouseup10 (elem10) {
    elem10.value = "ой, я поменял текст ещё раз";   
} 


function click11 (elem11) {
    elem11.value = "ку-ку";
}
 
function click12 (elem12) {
    elem12.value = "о, теперь на меня больше не нажать";
    elem12.disabled = true;
}

function buttonClick14() {
    document.getElementById("input14").style.color = 'red';    
}

function buttonClick15_1() {
    let input15 = document.getElementById("input15"); 
    input15.style.display = "none";
}

function buttonClick15_2() {
    let input15 = document.getElementById("input15"); 
    input15.style.display = "block";
    input15.style.cssFloat = "left";
}

function buttonClick16() {
    var i15 = document.getElementById("input15");
    i15.value = "ой, я поменял свой текст и css!";
    i15.style.color = 'red';
    i15.style.width = "200px";
    i15.style.height = '30px';
    i15.style.borderRadius = "10px"
}

function onClick17_1 () {
    let input17_1 = document.getElementById("input17_1");
    let input17_2 = document.getElementById('input17_2');
    input17_1.value = "о, теперь на меня больше не нажать";
    input17_1.disabled = true;
    input17_2.style.display = "block";
}

function onClick17_2 () {
    let input17_1 = document.getElementById("input17_1");
    let input17_2 = document.getElementById('input17_2');
    input17_1.value = "о, на меня снова можно нажать";  
    input17_1.disabled = false; 
    input17_2.style.display = "none";
}

function onClick18 () {    
    let in18 = document.getElementById('input18');    
    let number18 = Number(in18.value);
    number18++;   
    in18.value = number18;  
}

function buttonClick19 () {    
    let in19 = document.getElementById("input19");
    in19.value = "Теперь я плаваю справа";  
    in19.style.cssFloat = "right";  
}

function buttonClick21 () {
    var input21_1 = document.getElementById('input21_1');
	var input21_2 = document.getElementById('input21_2');
	var input1Value = input21_1.value;
	var input2Value = input21_2.value;
	input21_1.value = input2Value;
	input21_2.value = input1Value;   
}

function buttonClick22 () {
    var input22_1 = document.getElementById('input22_1');
    var input22_2 = document.getElementById('input22_2');
	var number22 = Number(input22_1.value);
    var square22 = number22*number22;
    input22_2.value = square22;	
}

function buttonClick23 () {
    var input23_1 = document.getElementById('input23_1');
    var input23_2 = document.getElementById('input23_2');
	var number23 = Number(input23_1.value);
    var square23 = number23*number23;
    
    if (isNaN(square23)) {
        alert("Введено не число!");	
    } else {
        input23_2.value = square23;	
    }
}

function buttonClick24 () {
	var button24 = document.getElementById('button24');
    button24.disabled = true;
    button24.style.cursor = "not-allowed";
}

function buttonClick25_1() {
    let elem25_1 = document.getElementById("input25");    
    elem25_1.value = "+";
}

function buttonClick25_2() {
    let elem25_2 = document.getElementById("input25");    
    elem25_2.value = "-";
}








