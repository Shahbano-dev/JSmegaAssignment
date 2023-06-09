// User Input & Conditional Statement

// 1.
//  var urcity = prompt("your city name please")
//  if(urcity.toLowerCase() == 'karachi' ){
//         alert("Welcome to city of lights")    
//     }
//  else {
//     alert("Welcome")
//  }

// 2.
//  var urgender = prompt("your enter your gender")
//  if(urgender.toLowerCase() == 'female' ){
//          alert("Good Morning Ma’am.")       }
//  else {
//    alert("Good Morning Sir.")
//  }

// 3.
// var color = prompt("Enter color plz")
// if(color.toLowerCase() == 'red'){
//     alert("Must Stop")
// }
// else if(color.toLowerCase() == 'yellow'){
//     alert("Ready to move")
// }
// else if(color.toLowerCase() == 'green'){
//     alert("Move now")
// }
// else{
//     alert("please enter just traffic signal colors")
// }
        
// 4.
// var fuel = +prompt("your car's fuel")
//  if (fuel<=0.25) {
//     alert("Please refill the fuel in your car")
//  }
//   else {
//     alert("your car's fuel is enough")
//  }
// 5.
// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
//  }
// e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f.
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
// document.write("alert of a displayed<br>given condition for variable a is true<br>")
// document.write("alert of c if 2 and if 4 displayed<br>condition 2 is true<br>condition 4 is true<br>")
// document.write("alert of d displayed<br>The cost equals<br>")
// document.write("First alert of e displayed<br>True<br>")
// document.write("alert of f displayed<br>car is smaller than cat<br>")


// 6.
// var color = +prompt("PLZ ENTER TOTAL MARKS")
// var eng = +prompt("PLZ ENTER ENGLISH OBTAIN MARKS")
// var urdu = +prompt("PLZ ENTER URDU OBTAIN MARKS")
// var maths = +prompt("PLZ ENTER MATHS OBTAIN MARKS")
// var cal = color *3
// document.write("Total Marks"+" "+cal+"<br>")
// var calSub = eng+urdu+maths
// document.write("Obtained Marks"+" "+calSub+"<br>")
// var percent = calSub/cal*100
// document.write("Percentage"+" "+percent+"%"+"<br>")
// if (percent>= 80) {
//     document.write("Grade: A-one<br>Remaks: Excellent")
// } 
// else if(percent>= 70){
//     document.write("Grade: A<br>Remaks: Good")
// }
// else if(percent>= 60){
//     document.write("Grade: B<br>Remaks: You need to improve")
// }

// else {
//     document.write("Grade: Fail<br>Remaks: Sorry")
// }

// 7.
// var secret_number = 7
// var guess = + prompt("Guess the Secret Number")

// if(guess==secret_number){
//     alert("Bingo! Correct answer")
// }
// else{
//   alert("Close enough to the correct answer")
// }
 
// 8.
// var num = + prompt("Enter your Number")
// if (num % 3 == 0) {
//     alert("your number is divisible by 3")
// } 
// else {
//     alert("not valid")
// }

// 9.
// var even = + prompt("Enter your Number")
// if (even % 2 == 0) {
//     alert("even number")
// } 
// else {
//     alert("odd number")
// }

// 10.
// var temp = + prompt("Enter Temperature")
// if(temp> 40){
//     alert("It is too hot outside")
// }
// else if(temp> 30){
//     alert("The Weather today is Normal")
// }
// else if(temp> 20){
//     alert("Today’s Weather is cool")
// }
// else{
//     alert("OMG! Today’s weather is so Cool")
// }

// 11.
// var fstNum = + prompt("Enter 1st Numeber")
// var secNum = + prompt("Enter 2nd Numeber")
// var optor = prompt("Enter Operator")
// if(optor == '+'){
//     var com = fstNum + secNum
//     alert(com)
// } 
// else if(optor == '-'){
//     var com1 = fstNum - secNum
//     alert(com1)
// } 
// else if(optor == '*'){
//     var com2 = fstNum * secNum
//     alert(com2)
// } 
// else if(optor == '/'){
//     var com3 = fstNum / secNum
//     alert(com3)
// } 
// else{
//     var com4 = fstNum % secNum
//     alert(com4)
// }