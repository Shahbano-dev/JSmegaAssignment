// Arrays and loop

// 1. 
// var multiArray = [[]];
  
// 2.
// var newArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(newArray[0]+"<br>"+newArray[1]+"<br>"+newArray[2]+"<br>")

// 3.
// var a = []
// for(var i=1 ; i<=10; i++){
//     a.push(i)
// }
// document.write(a[0]+"<br>"+a[1]+"<br>"+a[2]+"<br>"+a[3]+"<br>"+a[4]+"<br>"+a[5]+"<br>"+a[6]+"<br>"+a[7]+"<br>"+a[8]+"<br>"+a[9])

// 4.
// var tbl = +prompt("enter a number to show a multipication table")
// var numr = +prompt("enter length of multipication table")
// for(var i=1 ; i<=numr; i++){
//     var res = tbl*i
//     document.write(tbl+" X "+i+ "= "+res+"<br>")
// }
 
// 5.
// fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(i=fruits; i<=fruits; i++){
//    var newA = i
//     document.write(newA[0]+"<br>"+newA[1]+"<br>"+newA[2]+"<br>"+newA[3]+"<br>"+newA[4]+"<br><br>")
//     document.write("Element at index 0 is "+newA[0]+"<br> Element at index 1 is "+newA[1]+"<br> Element at index 2 is "+newA[2]+"<br> Element at index 3 is "+newA[3]+"<br> Element at index 4 is "+newA[4])
// }

// 6.
// document.write("<br><br>Counting: <br>")
// for(var i=1; i <=15 ; i++){
//     document.write(","+i)
// }

// document.write("<br><br>Reverse Counting: <br>")
// for(var a=10; a>0 ;a--){
//     document.write(","+a)
// }

// document.write("<br><br>Even: <br>")
// for(var b=0; b <= 20 ; b += 2){
//     document.write(","+b)
// }

// document.write("<br><br>Odd: <br>")
// for(var c=1; c <= 20 ; c += 2){
//     document.write(","+c)
// }

// document.write("<br><br>Series: <br>")
// for(var d=2; d <= 20 ; d += 2){
//     document.write(","+d+"k")
// }

// 7.
// var  baker = ["cake","apple pie","cookie","chips","patties"];
//  var option = prompt("Welcome To Delicious Bakers what do you want to order Sir/Ma'am?");
// var fst = -1;
// for (var i = 0; i < baker.length; i++){
//    if (baker [i]=== option) {
//     fst = i;
//   }
// }
// if (fst !== -1) {
//    alert( option + " available at index " + fst +"  in our bakery") 
// }
// else{
//    alert("sorry " + option + " is not available")

// }

// 8.
// var  larg = ["24","53", "78", "91", "12"];
// var max = larg[0];
// for (var i = 0; i < larg.length; i++) {
//    if (max<larg[i]) {
//       max =larg[i]
//    }  
// }
// document.write("<br>Array items: " + " "+ larg +"<br>The Largest Number is "+max);


// 9.

// var smallNum =["24","53", "78", "91", "12"];
// var min= smallNum[0];
// for (var i = 0; i < smallNum.length; i++) {
//    if (min>smallNum[i]) {
//       min=smallNum[i];
//    }  
// }document.write("<br>Array items: " + "  "+ smallNum + "<br>The Smallest Number is " +  min);


// 10.

// for(var b=5; b <= 100 ; b += 5){
//     document.write(","+b)
// }