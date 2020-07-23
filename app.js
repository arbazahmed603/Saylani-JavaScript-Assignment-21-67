// // Assignment Chapter 21-35

// // QUESTION NO. 1 : 

// //// SOLUTION :
// // var firstName = prompt("Enter your first name","Your first name");
// // var lastName = prompt("Enter your last name", "Your last name");
// // var fullName = firstName + " " + lastName;
// // alert("Hi" + " " + fullName + "!");


// //// QUESTION NO. 2 :

// //// SOLUTION :
// // var str = prompt("Enter your favorite mobile phone model");
// // var numOfCharsInStr = str.length;
// // document.write("My favorite phone is: " + str + "<br>")
// // document.write("Length of string: " + numOfCharsInStr)


// //// QUESTION NO. 3 :

// //// SOLUTION :
// // var str = "Pakistani";
// // var indexOfN = str.indexOf("n");
// // document.write("String: Pakistani" + "<br>")
// // document.write("Index of 'n': " + indexOfN)


// ////  QUESTION NO. 4 :

// //// SOLUTION :

// // var str = "Hello World";
// // var lastIndexOfN = str.lastIndexOf("l");
// // document.write("String: Hello World" + "<br>")
// // document.write("Last index of 'l': " + lastIndexOfN)


// ////  QUESTION NO. 5 :

// //// SOLUTION :

// // var str = "Pakistani";
// // var charAt3 =str.charAt(3);
// // document.write("String: Pakistani" + "<br>")
// // document.write("Character at index 3: " + charAt3)


// //// QUESTION NO. 6:

// //// SOLUTION : 

// // var firstName = prompt("Enter your first name","Your first name");
// // var lastName = prompt("Enter your last name", "Your last name");
// // var fullName = firstName.concat(" " , lastName);
// // alert("Hi" + " " + fullName + "!");


// //// QUESTION NO.7:

// //// SOLUTION :

// // var city = "Hyderabad";
// // var replacedCity = city.replace("Hyder", "Islam");
// // document.write("City: " + city+ "<br>");
// // document.write("After replacement: " + replacedCity)


// //// QUESTION NO. 8:

// //// SOLUTION:

// // var message = "Arbaz and Ahmed are friends. They play cricket and football together.";
// // var replacedMsg = message.replace(/and/g, "&");
// // document.write("Original Message: " + message + "<br>");
// // document.write("Modified Message: " + replacedMsg);


// //// QUESTION NO. 9:

// //// SOLUTION:

// // var numStr = "472";
// // var a = typeof(numStr);
// // var numInt = parseInt(numStr);
// // var b = typeof(numInt);
// // document.write("Value: " + numStr + "<br>");
// // document.write("Type: " + a + "<br>");
// // document.write("Value: " + numInt + "<br>");
// // document.write("Type: " + b);


// //// QUESTION NO. 10:

// //// SOLUTION:

// // var inp = prompt("Enter any noun in lower case");
// // var inpUpperCase = inp.toUpperCase();
// // alert("Upper Case: " + inpUpperCase);


// //// QUESTION NO. 11:

// //// SOLUTION:

// // var x = prompt("Enter any noun in lower case");
// // var firstChar = x.slice(0,1);
// // var remainingChars = x.slice(1);
// // var upperCase = firstChar.toUpperCase();
// // var lowerCase = remainingChars.toLowerCase();
// // var finalCase = upperCase + lowerCase;
// // alert("Title Case: " + finalCase);


// //// QUESTION NO. 12:

// //// SOLUTION:

// // var num = 35.36 ;
// // var numToString = num.toString();
// // var a1 = numToString.split(".")[0]; ///before
// // var a2 = numToString.split(".")[1]; ///after
// // var a = a1 + a2;
// // document.write("Number : ", num, "<br>");
// // document.write("Type : ", typeof(num), "<br>");
// // document.write("Number : ", numToString, "<br>");
// // document.write("Type : ", typeof(numToString), "<br>");
// // document.write("Number after removing dot : ", a);


// //// QUESTION NO. 13:

// //// SOLUTION:

// // var username = prompt("Enter your username");
// // var check = "n";
// // var whileVar = 0;
// // while(whileVar != 1){
// //     for (var i = 0; i <= username.length; i++){
// //         var a = username.charCodeAt(i);
// //         if(a === 44){
// //             check = "y";
// //         }
// //         if(a === 33){
// //             check = "y";
// //         }
// //         if(a === 46){
// //             check = "y";    
// //         }
// //         if(a === 64){
// //             check = "y";    
// //         }
// //     }
// //     if(check === "y"){
// //         alert("Please enter a valid username");
// //         var username = prompt("Enter your username");
// //         whileVar = 0;
// //     }
// //     else{
// //         whileVar = 1;
// //     }
// // }
// // alert(username)


// //// QUESTION NO. 14:

// //// SOLUTION:

// // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?", "Write it down here")
// // var inputLowerCase = input.toLowerCase();
// // for (var i = 0; i <= A.length ; i++){
// //     if(inputLowerCase == A[i]){
// //         alert(input.toUpperCase() + ' is available at index ' + i + ' in our bakery.');
// //         var check = 'y';
// //     }
// // }
// // if(check != 'y'){
// //     alert('We are sorry! ' + input.toUpperCase() + ' is not available in our bakery.');
// // }


// //// QUESTION NO. 15:

// //// SOLUTION:

// // var pas=prompt("Enter Password ");
// // var s=pas.length;
  
// // if(s<6){
// //     alert("Password should be atleast 6 characters long");
// // }
// // else if(pas[0]>='0' && pas[0] <='9'){
// //     alert("Password should not start with a number");
// // }


// //// QUESTION NO. 16:

// //// SOLUTION:

// // var university = "University of Karachi";
// // var splitted = university.split("");
// // for(var i = 0; i < splitted.length; i++){
// //     document.write(splitted[i] + "<br>");
// // }


// //// QUESTION NO. 17:

// //// SOLUTION:

// // var userInput = prompt("Write something");
// // var lengthOfInput = userInput.length;
// // var lastCharOfInput = userInput.slice(lengthOfInput-1 , lengthOfInput);
// // document.write('User input: ' + userInput + '<br>')
// // document.write('Last character of input: ' + lastCharOfInput);


// //// QUESTION NO. 18:

// //// SOLUTION:

// // var str = "The quick brown fox jumps over the lazy dog";
// // var strToLowerCase = str.toLowerCase();
// // var count = 0;
// // for(var i = 0; i < str.length; i++){
// //     var a = strToLowerCase.slice(i, i+3);
// //     if(a === "the"){
// //         count++;
// //     }
// // }
// // document.write('Text: The quick brown fox jumps over the lazy dog. <br>');
// // document.write("There are " + count + " occurence(s) of word 'the'.");



// //// *****ASSIGNMENT OF CHAPTERS NO. 26 - 30 (JAVASCRIPT)**************

// //   (MATH METHODS)

// //// QUESTION NO. 1 : 

// //// SOLUTION :

// // var inputNum = prompt("Enter a positive integer number");
// // var check = 'n'
// // while(check != 'y'){
// //     if(inputNum > 0){
// //         check = 'y';
// //         var roundOff = Math.round(inputNum)
// //         // // var roundOff = parseInt(inputNum);
// //         var floorValue = Math.floor(inputNum);
// //         var ceilValue = Math.ceil(inputNum);
// //         document.write('number: ' + inputNum + '<br>');
// //         document.write('round off value: ' + roundOff + '<br>')
// //         document.write('floor value: ' + floorValue + '<br>')
// //         document.write('ceil value: ' + ceilValue)
// //     }
// //     else{
// //         alert("You have entered an invalid number, please enter a positive integer number")
// //         var inputNum = prompt("Enter a positive integer number");
// //     }
// // }


// //// QUESTION NO. 2 :

// //// SOLUTION:

// // var inputNum = prompt("Enter a negative floating point number");
// // var check = 'n'
// // while(check != 'y'){
// //     if(inputNum < 0){
// //         check = 'y';
// //         var roundOff = Math.round(inputNum)
// //         var floorValue = Math.floor(inputNum);
// //         var ceilValue = Math.ceil(inputNum);
// //         document.write('number: ' + inputNum + '<br>');
// //         document.write('round off value: ' + roundOff + '<br>')
// //         document.write('floor value: ' + floorValue + '<br>')
// //         document.write('ceil value: ' + ceilValue)
// //     }
// //     else{
// //         alert("You have entered an invalid number, please enter a negative floating point number")
// //         var inputNum = prompt("Enter a negative floating point number");
// //     }
// // }


// //// QUESTION NO. 3 :

// //// SOLUTION:

// // var anyValue = prompt("Enter any +ve or -ve number");
// // var absoluteValue = Math.abs(anyValue);
// // document.write('The absolute value of ' + anyValue + ' is ' + absoluteValue);


// //// QUESTION NO. 4:

// //// SOLUTION:

// // var diceRoll = Math.floor( Math.random() * 6 ) + 1;
// // document.write('random dice value: ' + diceRoll);


// //// QUESTION NO. 5:

// //// SOLUTION:

// // var coinToss = Math.floor( Math.random() * 2 ) + 1;
// // if(coinToss === 1){
// //     document.write(coinToss + '<br>' + 'random coin value: TAILS')
// // }
// // if(coinToss === 2){
// //     document.write(coinToss + '<br>' + 'random coin value: HEADS')
// // }


// //// QUESTION NO. 6:

// //// SOLUTION:

// // var randomNo = Math.floor( Math.random() * 100 ) + 1;
// // document.write('random number between 1 and 100: ' + randomNo);


// //// QUESTION NO. 7:

// //// SOLUTION:

// // var inp= prompt("Enter weight in kgs");
// // var input= parseInt(inp);
// // alert("The weight of user is " + input + " kilograms");


// //// QUESTION NO. 8:

// //// SOLUTION:

// // var randomSecretNumber = Math.floor( Math.random() * 10 ) + 1;
// // var num1 = +prompt("Enter a number between 1 and 10");
// // if(num1 === randomSecretNumber){
// //     alert("Congratulations!")
// // }
// // else{
// //     alert("Oops! Try again.")
// // }



// //// *********ASSIGNMENT OF CHAPTERS NO. 31 - 34 (JAVASCRIPT)***********

// //  (DATE METHODS)

// //// QUESTION NO. 1 :

// //// SOLUTION: 

// // var rightNow = new Date();
// // document.write(rightNow);


// //// QUESTION NO. 2 :

// //// SOLUTION:

// // var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // var now = new Date();
// // var theMonth = now.getMonth();
// // var monthInWords = monthNames[theMonth];
// // document.write('Current Month: ' + monthInWords);


// //// QUESTION NO. 3 :

// //// SOLUTION:

// // var today = new Date();
// // var todayString = today.toString();
// // var day = todayString.slice(0,3);
// // document.write('Today is '+ day);


// //// QUESTION NO. 4 :

// //// SOLUTION:

// // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// // var today= new Date();
// // var todayDay = today.getDay();
// // var todayDayName = dayNames[todayDay];
// // if(todayDay === 0 || todayDay === 6){
// //     alert("It's Fun day");
// // }
// // else{
// //     alert('Today is ' + todayDayName);
// // }


// //// QUESTION NO. 5 :

// //// SOLUTION:

// // var today = new Date();
// // var todayDate = today.getDate();
// // if(todayDate >= 1 && todayDate <= 15){
// //     document.write("First fifteen days of the month");
// // }
// // else{
// //     document.write("Last days of the month");
// // }


// //// QUESTION NO. 6:

// //// SOLUTION:

// // var d = new Date();
// // var millsSince = d.getTime();
// // var minsSince = millsSince / (1000 * 60);
// // document.write('Current Date: ',d, '<br>');
// // document.write('Elapsed milliseconds since January 1, 1970: ',millsSince , '<br>');
// // document.write('Elapsed minutes since January 1, 1970: ',minsSince);


// //// QUESTION NO. 7:

// //// SOLUTION:

// // var d = new Date();
// // var hour = d.getHours();
// // if(hour >= 0 && hour <= 11){
// //     document.write("It's AM");
// // }
// // else{
// //     document.write("It's PM");
// // }


// //// QUESTION NO. 8:

// //// SOLUTION:

// // var laterDate = new Date("December 31, 2020");
// // document.write(laterDate);


// //// QUESTION NO. 9:

// //// SOLUTION:

// // var date = new Date();
// // var ramzaanDate = new Date("April 24, 2020");
// // var msDate = date.getTime();
// // var msRamzaanDate = ramzaanDate.getTime();
// // var msDiff = msDate - msRamzaanDate;
// // var dayDiff = msDiff / (1000*60*60*24);
// // dayDiff = Math.floor(dayDiff);
// // document.write(dayDiff + ' days have passed since 1st Ramadan, 2020.');


// //// QUESTION NO. 10:

// //// SOLUTION:

// // var d = new Date();
// // var beginningOf2015 = new Date("January 1, 2015 00:00:00");
// // var msDiff = d.getTime() - beginningOf2015.getTime();
// // var seconds = Math.floor(msDiff / 1000);
// // document.write("On reference date " + d + ", " + seconds + " seconds had passed since beginning of 2015");


// //// QUESTION NO. 11:

// //// SOLUTION:

// // var d = new Date(); //current date and time
// // document.write("Current date and time is : " + d + "<br>" + "<br>");
// // var hour = d.getHours(); //current hour number
// // d.setHours(++hour); //resetting the date obj an hour ahead
// // document.write("After resetting the date object an hour ahead : " + d);


// //// QUESTION NO. 12:

// //// SOLUTION:

// // var d = new Date();
// // document.write("Current date : " + d + "<br>" + "<br>");
// // var a = d.getFullYear();
// // var a = a - 100;
// // d.setFullYear(a);
// // document.write("100 years back, it was : " + d);


// //// QUESTION NO. 13:

// //// SOLUTION: 

// // var today = new Date();
// // var year = today.getFullYear();
// // var age = +prompt("What's your age?");
// // var diff = year - age;
// // document.write("Your age is " + age + "<br>");
// // document.write("Your birth year is " + diff);


// //// QUESTION NO. 14:

// //// SOLUTION:

// // var numOfUnits = 500;
// // var chargesPerUnit = 18.83;
// // var latePayment = 500;
// // var netAmount = numOfUnits * chargesPerUnit;
// // var grossAmount = netAmount + latePayment;

// // document.write("<h2>K-Electric Bill</h2>");

// // document.write("Customer Name: <b>Marium Arif</b> </br>");
// // document.write("Month: <b>June</b> </br>");
// // document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// // document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// // document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// // document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// // document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");



// // **********ASSIGNMENT OF CHAPTERS NO. 35 - 38 (JAVASCRIPT)********8

// // (FUNCTIONS)

// //// QUESTION NO. 1 :

// //// SOLUTION: 

// // function tellTime() {
// //     var now = new Date();
// //     document.write(now);
// // }

// // tellTime();


// //// QUESTION NO. 2 :

// //// SOLUTION:

// // function name(){
// //     var firstName = prompt("Enter your first name");
// //     var lastName = prompt("Enter your last name");
// //     document.write("Hello " + firstName + " " + lastName + "!");
// // }

// // name();


// //// QUESTION NO. 3 :

// //// SOLUTION:

// // function add(){
// //     var num1 = Number(prompt("Enter first number"));
// //     var num2 = Number(prompt("Enter second number"));
// //     var sum = num1 + num2 ;
// //     return sum;
// // }

// // var a = add();
// // document.write("The sum of the two numbers is " + a);


// //// QUESTION NO. 4 :

// //// SOLUTION:

// // function Calculator(num1,num2,operator){
// //     var result = 0;
// //     switch(operator){
// //         case "+":
// //             result = num1 + num2;
// //             break;
// //         case "-":
// //             result = num1 - num2;
// //             break;
// //         case "*":
// //             result = num1 * num2;
// //             break;
// //         case "/":
// //             result = num1 / num2;
// //             break;
// //         default:
// //             alert("You have entered an invalid operator");
// //     }
// //     return result;
// // }

// // var num1 = +prompt("Enter first number");
// // var operator = prompt("Enter operation to be performed on both numbers e.g +,-,*,/");
// // var num2 = +prompt("Enter second number");

// // var result = Calculator(num1,num2,operator);
// // document.write(num1 + " " + operator + " " + num2 + " = " + result);


// //// QUESTION NO. 5 :

// //// SOLUTION:

// // function square(x){
// //     var squareOfNum = Math.pow(x , 2)
// //     return squareOfNum;
// // }

// // var anyNum = +prompt("Enter a number");
// // var b = square(anyNum);
// // document.write("Square of " + anyNum + " is " + b);


// //// QUESTION NO. 6 :

// //// SOLUTION : 

// // function factorial(n){
// //     var result = 1;
// //     for(var i = 2; i <= n; i++){
// //         result = result * i ;
// //     }
// //     return result;
// // }

// // var number = +prompt("Enter any +ve number");
// // var factorialOfNumber = factorial(number);
// // document.write(factorialOfNumber);


// //// QUESTION NO. 7:

// //// SOLUTION:

// // function counting(start,end){
// //     if(start < end){
// //         for(var i = start; i <= end ; i++){
// //         document.write(i + "<br>");
// //         }
// //     }
// //     else{
// //         for(var i = end; i <= start ; i++){
// //             document.write(i + "<br>");
// //         }
// //     }
// // }

// // var num1 = +prompt("Enter start number");
// // var num2 = +prompt("Enter end number");
// // counting(num1, num2);


// //// QUESTION NO. 8:

// //// SOLUTION:

// // function calculateHypotenuse(base, perp){

// //     var base = calculateSquare(base);
// //     var perp = calculateSquare(perp);
// //     var hyp = Math.sqrt(base + perp);
// //     return hyp;

// //     function calculateSquare(num){
// //         var sq = num * num;
// //         return sq;
// //     }
// // }

// // var x = +prompt("Enter value of Base");
// // var y = +prompt("Enter value of Perpendicular");
// // var ans = calculateHypotenuse(x,y);
// // document.write("Base is " + x + "<br>");
// // document.write("Perpendicular is " + y + "<br>");
// // document.write("Hypotenuse is " + ans);


// //// QUESTION NO. 9:

// //// SOLUTION:

// //// i)

// // function areaOfRectangle(w,h){
// //     var area = w * h;
// //     return area;
// // }
// // var a = areaOfRectangle(10,10);
// // document.write("Area of the rectangle is: " + a + "<br>");

// ///// ii)

// // function areaOfRectangle(w,h){
// //     var area = w * h;
// //     return area;
// // }
// // var width = +prompt("Enter width of the rectangle");
// // var height = +prompt("Enter height of the rectangle");
// // var a = areaOfRectangle(width,height);
// // document.write("Area of the rectangle is: " + a);


// //// QUESTION NO. 10:

// //// SOLUTION:

// // function palindrome(str) {

// //     var len = str.length;
// //     var mid = Math.floor(len/2);

// //     for ( var i = 0; i < mid; i++ ) {
// //         if (str[i] !== str[len - 1 - i]) {
// //             return false;
// //         }
// //     }
// //     return true;
// // }

// // var str = prompt("Enter any string");
// // var a = palindrome(str);
// // if(a === true){
// //     document.write(str + " is a palindrome word.");
// // }
// // else{
// //     document.write(str + " is not a palindrome word.");
// // }


// //// QUESTION NO. 11:

// //// SOLUTION:

// // function uppercase(str)
// // {
// //   var array1 = str.split(' ');
// //   var newarray1 = [];
    
// //   for(var x = 0; x < array1.length; x++){
// //       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
// //   }
// //   return newarray1.join(' ');
// // }

// // var str = prompt("Enter any string in lower case");
// // document.write(uppercase(str));


// // QUESTION NO. 12:

// // SOLUTION:

// // function find_longest_word(str)
// // {
// //   var array1 = str.match(/\w[a-z]{0,}/gi);
// //   var result = array1[0];

// //   for(var x = 1 ; x < array1.length ; x++)
// //   {
// //     if(result.length < array1[x].length)
// //     {
// //     result = array1[x];
// //     } 
// //   }
// //   return result;
// // }

// // document.write(find_longest_word('Web Development Tutorial'));


// //// QUESTION NO. 13:

// //// SOLUTION:

// // function char_count(str, letter) 
// // {
// //  var letter_Count = 0;
// //  for (var position = 0; position < str.length; position++) 
// //  {
// //     if (str.charAt(position) == letter) 
// //       {
// //       letter_Count += 1;
// //       }
// //   }
// //   return letter_Count;
// // }

// // document.write(char_count('JSResourceS.com', 'o'));


// //// QUESTION NO. 14:

// //// SOLUTION:

// // function calcCircumference(radius) {
// //     var c = 2 * Math.PI * radius;
// //     document.write("The radius is " + radius + ". ");
// //     document.write("The circumfrence is " + c + "." + "<br>");
// //   }
// //   function calcArea(radius) {
// //     var a = Math.PI * (radius * radius);
// //     document.write("The radius is " + radius + ". ");
// //     document.write("The area is " + a + ".");
// //   }
  
// //   calcCircumference(10);
// //   calcArea(10);







// //**************Chapter 35-38 *********************








// function greet(){
//     var fname=prompt("Enter your first name")
//     var lname=prompt("Enter your Last name")
//     alert("welcome "+ fname +" "+ lname)

// }

// function sum(){
//     var s1=parseInt(document.getElementById(num1))
//     var s2=parseInt(document.getElementById(num2))
//     console.log(s1)
//   var r = s1 + s2
//     alert("sum = " + r)
// }
// ////////////////////////////
// function Calculator(){
//   var arg1=+prompt("enter first number")
//   var arg2=+prompt("enter second number")
//   var op=prompt("Enter Operator")
//  if(op=='+')
//  {
//    alert(arg1+arg2)
//  }
//  if(op=='-')
//  { s=arg1-arg2
//    alert(s)
//  }if(op=='*')
//  {
//    alert(arg1*arg2)
//  }if(op=='/')
//  {
//    alert(arg1/arg2)
//  }
//  else
//  alert("invalid Operator")
// }
// /////////////////////////////
// function square()
// {
//   var num=document.getElementById("numbersquare").value
//   alert(num*num)
// }
// //////////////////////
// function factorial()
// {
//   var fact=parseInt(document.getElementById("numberfact").value)
// if(fact==1)
// {
//   fact=1
// }
// if(fact==0)
// {
//   fact=0
// }
//   var temp=fact-1
//   while(temp!=1 && temp>1)
//   {
//     fact=fact*(temp)
//     temp--
//   }
//   alert("ans= "+fact)
//   console.log(fact)
// }
// /////////////
// function NumList()
// {
//   var n1=document.getElementById("numstart").value
//   var n2=document.getElementById("numend").value
// var para=document.getElementById("numList")
//   var i=n1
//   var j=n2
//   for (i;i<=j;i++)
//   {
//     para.innerHTML+=i+ "<br />" ;

//     console.log(i)
//   }
// }

// //////////////////////////
// function calculateHypotenuse()
// {
//   var base=document.getElementById("base").value
//   var perp=document.getElementById("perpendicular").value
//   var a=calculateSquare()
//   var result=Math.sqrt(a)

//   alert(result)
//   function calculateSquare()
//   { var ans=Math.pow(base,2)+Math.pow(perp,2)
//     return ans
//   }

// }
// ////////////////////////////////
// function calculateArea()
// {
//   var width=document.getElementById("width").value
//   var height=document.getElementById("height").value
//   var result=Area(width,height)
//   alert("area= ",result)
//   function Area(w,h)
//   {
//     var Area=w*h
//     return Area;
//   }
// }
// //////////////////////////////////
// function palindrome()
// {
//   var string=prompt("Enter String")
//   var i;
//   var j=string.length
//   console.log()
//   var c=0
//   for(i=0;i<=string.length;i++)
//   {
//     if(string[i]==string[j] )
//     {
//       j--
//       c++
//     }
//     if(c=string.length)
//     {
//       //alert(string, "is a palindrome word")
//     }
//     else{
//       alert("no ")
//     }
//     // if(string[i]==string[j] )
//     // {
//     //   alert("no palindrome")
//     // }

//   }

// }





// //**************Chapter 39-42 *********************








// //Write a custom function power ( a, b ), to calculate the value of a raised to b. 

// // var result=document.getElementById("fname");
// function power(base, exp) {
//     var base = +prompt("enter value of base", "enter here")
//     var exp = +prompt("enter value of exponent", "enter here")
//     var res = Math.pow(base, exp);
  
//     document.getElementById("result").value = res;
  
//   }
//   ////     <p> 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …</p>
//   //var y=+prompt("enter year")
//   // var y=+document.getElementById("year");
  
//   // console.log(y)
//   // var y=parseInt(document.getElementById("year").value);
  
//   function leapyear(y) {
//     //var y = +prompt("enter year");
//     var y = parseInt(document.getElementById("year").value);
  
//     if (y % 4 == 0) {
//       alert(y + "is a leap year")
//         / console.log(y + " is a leap year");
//     }
//     else if (y % 4 == 1) {
//       //console.log(y + "is a leap year");
//       alert(y + " is not a leap year")
//     }
//     else {
//       alert("incorrect data")
//     }
  
//   }
//   ///////////////////
//   function calculateArea() {
//     var a = +(document.getElementById("side_a").value);
//     var b = +(document.getElementById("side_b").value);
//     var c = +(document.getElementById("side_c").value);
  
//     s = calculateS(a, b, c);
//     document.getElementById("AreaResult").value = s;
  
//   }
//   function calculateS(a, b, c) {
//     s = (a + b + c) / 2
//     area = s * ((s - a) * (s - b) * (s - c))
//     return area;
//   }
//   function avg() {
//     var s1 = document.getElementById("s1").value
//     var s2 = document.getElementById("s2").value
//     var s3 = document.getElementById("s3").value
//     var total = document.getElementById("total").value
//     var htmlavg = document.getElementById("average")
//     var htmlpercent = document.getElementById("percentage")
//     console.log(s1, s2, s3, total)
//     var average = average();
//     var percentage = percentage();
//     function average() {
//       var localavg = (s1 + s2 + s3) / 3
//       console.log(localavg)
//       return localavg
//     }
//     function percentage() {
//       var t = (s1 + s2 + s3) / total
//       var localpercentage = t * 100
//       return localpercentage;
  
//     }
//     console.log(average)
//     console.log(percentage)
//     //changeIt.style.visibility = 'visible'
//     document.getElementById("hiddendiv").style.visibility = 'visible';
  
//     document.getElementById("average").setAttribute('type', 'text')
//     // document.getElementById("apercentage").setAttribute('type','text')
//     /// document.getElementById("h").setAttribute('type','text')
//     document.getElementById("percentage").setAttribute('type', 'text')
//     htmlavg.value = average
//     htmlpercent.value = percentage
  
//   }
//   // function avg(){
//   //   document.getElementById('hiddendiv').className="show";
//   // }
//   function percentage() {
//     //document.getElementById("percentage").setAttribute('type','text')
//     // document.getElementById("apercentage").setAttribute('type','text')
//     /// document.getElementById("h").setAttribute('type','text')
//   }
  
//   function index() {
//     var text = document.getElementById("indexOf").value
  
//     var letter = document.getElementById("letter").value
  
//     for (var i = 0; i <= text.length; i++) {
//       if (letter == text[i]) {
//         alert(text[i] + " has found at " + (i + 1) + " position")
  
//       }
//     }
//   }
  
//   function vowelremoval() {
//     var vow = document.getElementById("sentence").value
//     var arr = [];
//     var arrCount = 0;
//     for (var i = 0; i <= vow.length; i++) {
//       if (vow[i] != 'a' && vow[i] != 'e' && vow[i] != 'o' && vow[i] != 'i' && vow[i] != 'u') {//alert(vow[i] +" has found at " + (i+1) + " position")
//         //  arr[arrCount]==vow[i];
//         arr.push(vow[i])
//         //  console.log(arr[arrCount])
//         //    arrCount++
//         //      console.log(delete vow[i])
  
//       }
  
//     }
//     var toString = arr.join('')
//     alert("after removing vowels sentence will be something like this" + "\n" + toString)
  
//   }
  
//   //////////////////////
  
//   function distance() {
//     var values = document.getElementById("Unit").value
//     console.log(values)
//     var km = parseInt(document.getElementById("distance").value)
//     console.log(km)
//     var ans;
  
//     if (values == 'feet') {
//       ans = feet()
  
//     }
//     if (values == 'inches') {
//       ans = inches()
//     }
//     if (values == 'centimeter') {
//       ans = centimeter()
//     }
//     if (values == 'meter') {
//       ans = meter()
//     }
  
//     //document.getElementById("mySelect").selectedIndex = "2";
//     function feet() {
//       var ft = km * 3280.8
//       return ft
//     }
//     function inches() {
//       var inch = km / 39370
//       return inch
//     }
//     function centimeter() {
//       var cm = km
//       return cm
//     }
//     function meter() {
//       var m = km * (1000)
//       return m
  
//     }
//     document.getElementById("distanceResult").innerHTML = ans
//   }
//   /////////////////////////
//   function salary() {
//     var workingHours = parseInt(document.getElementById("salary").value)
//     if (workingHours > 40) {
//       r = workingHours - 40
  
//       result = r * 12
  
//       alert("salary of over time will be " + result)
//     }
//     if (workingHours < 40 || workingHours == 0 || workingHours == 40) {
  
//       alert("condition o over time will not applied to less than 40 hours ")
//     }
//   }
//   ////////////////////////////////
//   function Domination() {
//     var result;
//     var hundredCount = 0
//     var twentyCount=0;
//     var fiftyCount = 0;
//     var input = +prompt("Enter Amount to withdraw!!")
//     console.log(input)
//     if (input > 100) {
//       minusHundred()
//     }
//     console.log("hell", input, hundredCount)
//     function minusHundred() {
//       input = input - 100
//       hundredCount++
//       if (input >= 100) {
//         minusHundred()
//       }
//     }
//     if (input >= 50) {
//       minusfifty()
//     }
//     console.log("kill", input, fiftyCount)
  
  
//     function minusfifty() {
//       input = input - 50
//       fiftyCount++
//       if (input > 100) {
//         minusfifty()
//       }
//     }
  
//     if (input >= 10) {
//       minustwenty()
//     }
//     console.log("will", input, twentyCount)
  
  
//     function minustwenty() {
//       input = input - 20
//       twentyCount++
//       if (input > 20) {
//         minustwenty()
//       }
//     }
  
  
//   }
  








//  //   *************Chapter 58-67*****************






//   // var a=document.getElementById("main-content")
// // console.log(a.childNodes[0])
// var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[4]
// //var c=document.getElementsById("ooo");
// function part1() {
//     console.log(a)
// }


// // console.log(document.childNodes[0])
// function part2() {
//     console.log(a.childNodes[1])
//     console.log(a.childNodes[2])
//     console.log(a.childNodes[3])
//     console.log(a.childNodes[4])
//     console.log(a.childNodes[5])
// }

//     //   var c=a.childNodes[1].nodeValue
//     //     //var b=document.childNodes[1].childNodes[2].childNodes[1].childNodes[4]
//     //     document.getElementById("ooo").innerHTML = c;
//       //  var c=document.getElementsByClassName("render")
//     //  console.log
//     // var ab = document.getElementById('main-content');
//     // if (typeof ab !== null && ab !== 'undefined') {
//     //     document.getElementById("main-content").innerHTML = c;
//     //     console.log(c)
//     // }
  