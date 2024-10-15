// chapter 35 - 37  (functions)....

// question number 1...

// function displayalrt(){
//      alert("this is an functions alert")
// }
// displayalrt()

// question number 2...

// function askName(){
//     var ask = prompt("enter name")
//      var answer = ask;
//      alert(answer);
// }
// askName()

// question number 3...

function one(){
    console.log("hello")
}

function sec(){
    a = 4;
    b = 5;
    let add = (a+b)
    console.log(add)
}

function mainfunction(){
    one()
    sec()
}
mainfunction()

// question number 4...

// function  display(){
//     var enter = prompt("enter your name")
//     alert(enter);
// }
// display()

// question number 5...

// function concat(a,b,c){
//     return [a,b,c].join('')
// }

// console.log(concat(true, "zohra", 67));

// function zohra(d,e,f){
//     return [d,e,f].join('')
// }
// console.log(zohra(false,"happiness",25))

// question number 6...

// function paramet(program1 , program2){
//     let result = program1 + program2
//   return result;
// }

// let concatination = paramet("messy" , "house");
// console.log(concatination);

// function tobeask(value1,value2 ,value3){
//     let milna = value1 + value2 + value3;
//     return milna;
// }

// var university = tobeask("Zohra","Rao","princess");

// console.log(university)

// question number 7...

// function multi(a,b,c){
//   let multiply = a*b*c
//   return multiply
// }

// let helllo = multi(2,4,8)

// console.log(helllo)

// function cdn(d,e,f){
//     let jawab = d*e*f
//     return jawab;
// }
// let ghdn = cdn(5,5,2)
// console.log(ghdn);

// do test of concatination and multi...

// concatination....

// function concatination(input1,input2){
// let mixup  = input1 + input2
// return mixup; 
// }

// let wikkipedia = concatination("laptop","scheme")
// console.log( wikkipedia)

// multiplication...

// function karachi(uni,ned){
//    let link = uni * ned
//    return link
// }

// let bghjn = karachi(6,7);
// console.log(bghjn);

// question 9..

// function sum(a,b){
//   let mixture = a + b
//   return mixture;
// }

// let asdtg = sum(10,7);
// console.log(asdtg)

// question 8...

// let input = prompt("enter an array number")

// let numbers = input.split(",").map(Number) 

// if(numbers.includes(NaN)){
//   alert("invalid input")
// }

// let sum = numbers.reduce((a,b)=> a + b);

// let avr = sum/numbers.length;

// alert(`average ${avr}`);

// let userinput = prompt("enter a number here");

// let changinginput = userinput.split(",").map(Number);

// if(changinginput.includes(NaN)){
//    alert("invalid input!!!")
// }

// let condition = changinginput.reduce((a,b)=> a+b);

// let average = condition/changinginput.length

// console.log(average)

// question number 11 just returned value is stored in a variable here.

// let userinput = prompt("enter a number here");

// let changinginput = userinput.split(",").map(Number);

// if(changinginput.includes(NaN)){
//    alert("invalid input!!!")
// }

// let condition = changinginput.reduce((a,b)=> a+b);

// let average = condition/changinginput.length

// let avr = average

// console.log(avr)

// question number 13....ask

// function year(date,year){
//     return new Date(date.setFullYear(year))
// }

// let currentdate = new Date();
// console.log(`current date : ${currentdate}`)

// let updateddate = new Date('wed,oct,2025')
// console.log(`updated date : ${updateddate}`)


// question number 12....

// function wordcounting(){
//     let input = prompt("enter any word")
//     for(var i = 0; i<=input.length-1;i++){
//         console.log(input[i])
//     }
// }
// wordcounting()

// question number 14...

// function count() {

//     var input = prompt("enter your date of birth");

//     let dob = new Date(input);
     

// let today = new Date();

// let age1 = today.getFullYear() - dob.getFullYear();

// alert(`your are ${age1} years old`);
// }
// count();

// question 16.

// function repeatation(){
//    let letter = prompt("enter any letter")
//    let repeat = letter.repeat(10)
//    console.log(`repeated input : ${repeat}`)
// }
// repeatation()
// // 

// question 17.

// function reverse(){
// var arr = ['a','b','c','d','e']
// arr.reverse();
// console.log(arr)
// }

// reverse()

// question 15.

// function check(){
//     let input = prompt("enter an aarrays name")
//     let anarray = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];

//     if(anarray.includes(input)){
//       alert("true")
//     }
//     else{
//       alert("false")

//     }
// }
// check()

//   chapter number 38 (local vs. global variables)

// question number 1....

// function localvar(){
//     let a = 10;
//     let b = 2;
//     let result = a*b
//     console.log(`result : ${result}`)
// }
// localvar();

// question number 2...

// var globalvar = 54;

// function global(){
//     let inpuut = 32;

//     let jwb = globalvar + inpuut;

//     console.log(jwb)
// }
// global();

// chapter 39 , 40...(switch statement)...

// var userinp1 = +prompt("enter 1st value to perform action");

// var operator = prompt("enter an operator");

// var userinp2 = +prompt("enter 2nd value to perform action");

 

// switch(operator){
//     case "+":
//    var conclusion = userinp1 + userinp2 ;
//    alert(conclusion)
//    break;  

//    case "-":
//    var conclusion1 = userinp1 - userinp2 ;
//    alert(conclusion1)
//    break;  

//    case "*":
//    var conclusion2 = userinp1 * userinp2 ;
//    alert(conclusion2)
//    break;  

//    case "%":
//    alert(conclusion)
//    var conclusion3 = userinp1 % userinp2 ;
//    alert(conclusion3)
//    break;  
// }

// pdf function switch statement while,do while loop..start

// question number 7..










