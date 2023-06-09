// Arrays
// 1.
// var newArray = [];
// 2.
// var myArray = new Array();
// // 3.
// var stngArray = ["cat", "dog", "lion", "elephent"];
// // 4.
// var numArray = [1,2,3,4,5,6];
// // 5.
// var bolnArray = [true,false,true,false]
// // 6.
// var mixArray = [1, "cat", "dog", true];
// 7.
// var qual = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<br>Qualifications:<br><br>1)"+qual[0]+"<br>2)"+qual[1]+"<br>3)"+qual[2]+"<br>4)"+qual[3]+"<br>5)"+qual[4]+"<br>6)"+qual[5]+"<br>7)"+qual[6]+"<br>8)"+qual[7])
// 8.
// var student =["Michael","John","Tony"]
// var numb= [320,230,480]
// var scorePercent = numb[0]/500*100
// var scorePercent1 = numb[1]/500*100
// var scorePercent2 = numb[2]/500*100
// document.write("Score of "+student[0]+" is "+numb[0]+". Percentage: "+scorePercent+"%<br>")
// document.write("Score of "+student[1]+" is "+numb[1]+". Percentage: "+scorePercent1+"%<br>")
// document.write("Score of "+student[2]+" is "+numb[2]+". Percentage: "+scorePercent2+"%<br>")
// 9.
// var color =["red","green","blue","pink","brown"]
//  document.write(color)
// a.
// var addc = prompt("what color do you want to add in start")
// color.unshift(addc)
// document.write(color)
// b.
// var adde = prompt("what color do you want to add at end")
// color.push(adde)
// document.write(color)
// c.
// color.unshift("yellow","purple")
// document.write(color)
// d.
// color.shift()
// document.write(color)
// e.
// color.pop()
// document.write(color)
// f.
// var addc = prompt("what color do you want to add")
// var addw = prompt("where do you want to add")
// color.splice(addw,0,addc)
// document.write(color)
// g.
// var addc = prompt("Enter index of color you want to delete")
// var addw = prompt("how many color do you want to delte?")
// color.splice(addc,addw)
// document.write(color)

// 10.
// var bar = []
// var studentScores =[320,230,480,120]
// document.write("Scores of Students" +studentScores+"<br>")
// var bar = studentScores.sort()
// document.write("Odered Scores of Students" +bar)

// 11.
// var cities = ["Karachi","Lahore","Islamabad","Multan","Quetta","Peshawar"]
// document.write("Cities List:  <br>" +cities+"<br>")
// var seletedCities = cities.slice(1,4)
// document.write("Selected Cities List:  <br>" +seletedCities)

// 12.
// var arr = ["This", "is", "my"," cat"];
// document.write("Array"+arr+"<br>")
// var jn = arr.join(" ")
// document.write("String"+jn)

// 13.
// var com = []
// com.push("Keybord")
// com.push("mouse")
// com.push("printer")
// com.push("monitor")
// document.write("Devices: <br> "+com+"<br>")
// var first=com.shift()
// document.write("OUT: <br> "+first+"<br>")
// var sec=com.shift()
// document.write("OUT: <br> "+sec+"<br>")
// var thrd=com.shift()
// document.write("OUT: <br> "+thrd+"<br>")
// var four=com.shift()
// document.write("OUT: <br> "+four+"<br>")

// 14.

// var com = []
// com.push("Keybord")
// com.push("mouse")
// com.push("printer")
// com.push("monitor")
// document.write("Devices: <br> "+com+"<br>")
// var first=com.pop()
// document.write("OUT: <br> "+first+"<br>")
// var sec=com.pop()
// document.write("OUT: <br> "+sec+"<br>")
// var thrd=com.pop()
// document.write("OUT: <br> "+thrd+"<br>")
// var four=com.pop()
// document.write("OUT: <br> "+four+"<br>")

// 15.
// var phone = ['Apple','Samaung','Motorolla','Nokia','Sony', 'Haier'];
// document.write("<select>" 
// + "<option value = 'phone[0]'> DropMenu </option>"
// + "<option value = 'phone[1]'> Apple</option>"
// + "<option value = 'phone[2]'> Samsung</option>"
// + "<option value = 'phone[3]'> Motorolla</option>"
// + "<option value = 'phone[4]'> Nokia</option>"
// + "<option value = 'phone[5]'> Sony</option>"
// + "<option value = 'phone[6]'> Haier</option>" 
// + "</select>");