// DATE METHODS
// 1.
// var date = new Date();
// document.write("<br>"+ date);

// 2.
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// document.write("The current month is " + months[d.getMonth()]);
 
// 3.
// var currentDay = new Date();
// currentDay.toString;
// var sel = currentDay.toString();
// var day = sel.slice(0,3);
// document.write("Today is " + day);

// 4.
// var currentDay = new Date();
// currentDay.toString;
// var sel = currentDay.toString();
// var y = sel.slice(0,3);
// alert(" Today is " + y)

// 5.
// var fifteenDays = new Date();
// if (fifteenDays.getDate() < 16) {
//     document.write("First fifteen Days Of The Month")
// }
// else if (fifteenDays.getDate() > 15) {
//     document.write("Last fifteen Days Of The Month")
// }

// 6.
// var xy = new Date(2020);
//  var z= new Date(xy. getFullYear(), xy. getMonth()+1, 0, xy. getMinutes()+1, 0);
//  document.write("Current date"+xy+"<br>")
// document.write("Eclipse milliseconds since jan 1 "+z+"<br>")
// document.write("Eclipse mintues since jan 1 "+z)

// 7.
// var time  = new Date()
// var currentTime = time.getHours()
// if (currentTime < 12) {
//     alert (" “Its AM”")  
// } 
// else{
//     alert(" “its PM”.")
// }

// 8.
// var laterDate = new Date("december 31 2020");
// document.write("<br>Later Date"+ laterDate +"<br>")

// 9.
// var date1 = new Date('06/18/2015');
// var date2 = new Date('06/09/2023');
// var Difday = date2.getTime() - date1.getTime();
// var count =  1000 * 3600 * 24;
// var final = Difday/count
// document.write(final+" Days Have Passed since 1st ramdan 2015")
     
// // 10.
// var date1 = new Date('06/18/2015');
// var date2 = new Date('06/09/2023');
// var difsec = date2.getTime() - date1.getTime();
// var second =  1000
// var result = difsec/second
// document.write("On refence date "+date2+" "+result+" seconds Had Passed since beginning of 2015")

// 11.
// var cDate = new Date()
// document.write(cDate +"<br>")
// var oldDate = cDate.getHours()
// document.write(oldDate+"<br>")
//   cDate.setHours(oldDate-1)            
// document.write("1 hour ago, it was :"+cDate +"<br>")

// 12.
// var cDate = new Date()
// document.write( "Current Date :"+cDate+"<br>")
// var getFullYr = cDate.getFullYear()
// document.write(getFullYr )
//  cDate.setFullYear(getFullYr-100)
// document.write("100 years back is was "+cDate)
// alert("100 years back is was "+cDate)

// 13.
// var userAge = prompt("Enter Your Age");
// var birth = userAge;
// var currentYear = 2023;  
// var calculate =  currentYear - userAge;
// var result = calculate;
// document.write("Your age is :" + userAge + "<br>Your birth year is :" + calculate +"<br>");

// 14.
// document.write("<br><h2>K - Electric Bill</h2>");
// var user_Name = prompt("Enter Your name");
// var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var month =new Date(); 
// var units =+prompt("enter units");
// var PerUnit = 16;
// var net_amount_Payable = units * PerUnit;
// var fixed_value = net_amount_Payable.toFixed(2);
// var sur_charges = 350;
// var Pay_After_DueDate = sur_charges + net_amount_Payable;
// var fixed = Pay_After_DueDate.toFixed(2);
// document.write("<h2>Customer Name:" + user_Name + "<br>Month:" + monthNames[month.getMonth()] + "<br> Number of Units:"
//  + units +"<br>Charges perUnit:"+ PerUnit + "<br><br>Net Amount payable (with in Due Date):" + fixed_value 
//  +"<br>Late Payment Surcharge:" + sur_charges +"<br>Gross Amount Payable (after in Due Date):" + fixed)
