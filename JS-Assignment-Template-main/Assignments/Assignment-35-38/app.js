// Function.
// 1.

// function displayDate() {
//     document.write("<br>"+ new Date());
// }
// displayDate(new Date());

//  2.    
// function greet(firstName,lastName){
// document.write(" hello " + firstName , lastName);
// }
// greet ("Sana" , "Khan");

// 3.
//  function add(n1,n2){
// return +prompt("First Number") + (+prompt("Second Num"));
// }
// var num = add();
// document.write(num);

// 4.   
// var num1 = prompt("Enter The First Number");
// var num2 = prompt("Enter The Second Number");
// var ope =  prompt("Enter Operator from + * - /");
// function add(num1,num2){
//     return "Addition Result is " + parseInt(num1) + parseInt(num2);
//     }
//     var result2 = add(num1,num2);
//     document.write( result2);

// function multiply(num1,num2){
//     return "Multiply Result is " + parseInt(num1) * parseInt(num2);
//    }
//     var result3 = multiply(num1,num2);
//    document.write( result3);

// function subtract(num1,num2){
//     return "Subract Result is " + parseInt(num1) - parseInt(num2);
//     }
//     var res4 = subtract(num1,num2)
//     document.write(res4)

// function divide(num1,num2){
//     return "Divide Result is " + parseInt(num1) / parseInt(num2);
//     }
//     var res5 = divide(num1,num2);
//     console.log(res5);

// 5.
// function sqaure(a){
//  var result = a * a;
//      document.write("Square of your number is " + result)
//      }
//     sqaure(8);

// 6.          
// function factorial(n){
//     if (n == 0) {
//         return 1;
//     }
// else{
//     return n*factorial(n-1);
// }
// }
// var result = factorial(5);
// document.write(result);

//8.
// function calculateHypotenuse(base, perpe){
//     function calculateSquare(side){
//     return side*side;
//     }
//     base_square = calculateSquare(base)
//     perpe_square = calculateSquare(perpe)
//     hypo_square = base_square + perpe_square
//     hypo = Math.sqrt(hypo_square)
//     document.write(base_square);
//     document.write(perpe_square);
//      return hypo;
// }
// var hypo = calculateHypotenuse(4,2);
// document.write(hypo);

// 9.
// function area (length, width) {
//     return length * width;
//     }
//     var values = area(125,145)
//     document.write("The area of your rectangle is " + values+"<br>" );
//     function area (length, width) {
//         return length * width;
//         }
//      var weight = 125;
//      var height = 145;
//      var result = area(weight,height)
//      document.write("The area of your rectangle is " + result );

//  10.
// var str = prompt(" Please Enter a string");
// function palindrome(str) {
//     if (str == str.split('').reverse().join('')) {
//     document.write(str + ' is palindrome.');
//     }
//     else {
//     document.write(str + ' is not palindrome.');
//     }
//    }
//    var result = palindrome(str);
   
//11.
//  function uppercase(str)
//     {
//       var arr = str.split(' ');
//      document.write(arr);
//       var newarr = [];
        
//       for(var i = 0; i < arr.length; i++){
    
//           newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    
//       }
//       return newarr.join(' ');
//     }
//      document.write(uppercase("the quick brown fox"));

//    12.
// function longestWord(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var i = 1 ; i < arr.length ; i++)
//   {
//     if(result.length < arr[i].length)
//     {
//     result = arr[i];
//     } 
//   }
//   return result;
// }
// document.write(longestWord('Web Development Tutorial'));

// 14.
// document.write("<b>The Geometrizer");
// function calCircumference(radius){
//   var cuircum= 2* Math.PI*radius;
// console.log("The circumference is "+cuircum);
// }
// calcCircumference(3)

// function calArea(radius){
//     var area= Math.PI * radius**2;
//   console.log("The Area is "+ area);
//   } 
// calArea(2)
