// String Methods
// 1.
// var fname = prompt("enter your First Name plz")
// var last = prompt("enter your Last name plz")
// var welcome = fname + last
// document.write("wellcome "+welcome)

// 2.
// var fname = prompt("Your Favourite phone")
// var lcount = fname.length
// document.write("MY FAVOURITE PHONE is: "+fname +"<br> length of string: "+lcount)

// 3.
// var indx = "Pakistani"
// var getletter = indx.indexOf("n")
// document.write("String: "+indx +"<br> index of 'n': "+getletter)

// 4.
// var indx = "Hello World"
// var getletter = indx.lastIndexOf("l")
// document.write("String: "+indx +"<br> index of 'n': "+getletter)

// 5.
// var indx = "Pakistani"
// var getletter = indx.indexOf()
// document.write("String: "+indx +"<br> index of 3: "+getletter)

// 6.
// var fname = prompt("enter your First Name plz")
// var last = prompt("enter your Last name plz")
// var welcome = fname.concat(last);
// document.write("wellcome "+welcome)

// 7.
// var a = "Hyderabad"
// var b = a.replace("Hyder","Islam")
// document.write("City: "+a +"<br> After Replacement: "+b)

// 8.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rmessage = message.replace(/and/g,"&")
// document.write(rmessage)

// 9.
// var stng = "472"
// var c = typeof(stng)
// var d = Number(stng)
// var e = typeof(d)
// document.write("value: "+stng +"<br> Type: "+c+"<br>value: "+d +"<br> Type: "+e)

// 10.
// var fname = prompt("enter your Name plz")
// var a = fname.toLocaleUpperCase()
// document.write("User Input: "+fname +"<br> Uper case: "+a)

// 11.
// var good_name = prompt("Your Name Please")
// var select_word = good_name[0].toUpperCase()
// var ur_name = good_name.slice(1).toLowerCase()
// document.write("User Input: "+good_name +"<br> Title case: "+select_word+ur_name)

// 12.
// var numr = 35.36
// var resultt =  numr.toString().replace(".", "");
// document.write("Number: "+numr +"<br> Result: "+resultt)

// 13.
//  var user = prompt(" Enter Your Name ");

// if (user.charCodeAt() === 33 || user.charCodeAt() === 44||

// user.charCodeAt() === 46 || user.charCodeAt() === 64) 
// {
//  alert("Please enter a valid username without using symbols.")  }   
    
// else{
//        alert("thanks for your input")

// }

// 14.
// var  bakeri = ["cake","apple pie","cookie","chips","patties"];
//  var userSelect = prompt("Welcome what do you want to order Sir'Maam?");
// var index = -1;
// for (var i = 0; i < bakeri.length; i++){
//    if (bakeri [i].toLowerCase( )=== userSelect.toLowerCase()) {

//       index = i;
//   }
// }
// if (index !== -1) {
//    alert( userSelect + "  is available at index " + index +"  in our bakery") 
// }
// else{
//    alert("sorry " + userSelect + " is not available")

// }

// 16.
// var strg = "University of Karachi";
// var arr = strg.split("");
// for (var i = 0; i <arr.length; i++) {
// document.write( arr[i] + "<br>");    
// }

// 17. 
// var userI = prompt("Enter a Character");
// var last = userI.slice(-1);
// document.write("User Input:" + userI + "<br> Last Character of input:" +last);

// 18.
// var str =("The quick brown fox jumps over the lazy dog")
// document.write("Text: "+"<br/>"+str +"<br/>")
// var strword = str.toLowerCase()
// var word =strword.match(/the/g)
// document.write("There are "+word.length+" occurrence(s) of word 'the'")
