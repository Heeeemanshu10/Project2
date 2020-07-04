//FOR TASK 1
function addition(){
    var a =Number(document.getElementById("number1").value);
    var b =Number(document.getElementById("number2").value);
    
        var c = a+b;
        document.getElementById("result").innerHTML = c;
       
}

function substraction(){
    var a =Number(document.getElementById("number1").value);
    var b =Number(document.getElementById("number2").value);
    
        var c = a-b;
        document.getElementById("result").innerHTML = c;
       
}

function multiplication(){
    var a =Number(document.getElementById("number1").value);
    var b =Number(document.getElementById("number2").value);
    
        var c = a*b;
        document.getElementById("result").innerHTML = c;
       
}
function division(){
    var a =Number(document.getElementById("number1").value);
    var b =Number(document.getElementById("number2").value);
    
        var c = a/b;
        document.getElementById("result").innerHTML = c;
       
}
function square_root(){
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
      
    var c = Math.sqrt(a);
    var d = Math.sqrt(b);
    document.getElementById("result").innerHTML = c;
    document.getElementById("result").innerHTML = d;

}

function absolute(){
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    
    var c = Math.abs(a);
    var d = Math.abs(b);
    document.getElementById("result").innerHTML = c;
    document.getElementById("result").innerHTML = d;

}

function percentage(){
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);

    var c = (a/b)*100;
    document.getElementById("result").innerHTML = c;
}

// END OF TASK1 CODE
// TASK 2
function validate(){
var name = document.getElementById('name').value;

if (name == "") {
    alert("Name can't be blank");
    return false;
}
var us = /[0-9]/g;
var result = name.match(us);
if (result != null) {
    alert("Use Only Alphabets In name");
    return false;
}
var phoneno = document.getElementById('number').value;

if (phoneno == "") {
    alert(" Phone Number can't be blank");
    return false;
}
var p = /[^0-9]/g;
var result = phoneno.match(p);
if (result != null) {
    alert("Use Only Integers In PHONE NUMBER");
    return false;
}
var mail = document.getElementById('email').value;

if(mail == ""){
    alert("email can't be blank");
    return false;
}
var x = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var y = mail.match(x);
if(y == null){
    alert('Write a correct email');
    return false;
}
}

//END OF TASK2
//TASK 3
function palidrome(){
var str = document.getElementById('text').value;
var regex = /[^A-Za-z0-9]/g;
var len = str.length;
str = str.toLowerCase().replace(regex, '');
for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        document.getElementById('result').innerHTML = "Not a palidrome";
    }
    else{
        document.getElementById('result').innerHTML = "Palidrome";
    }

  }
  
 }
 function anagram(){
     var str = document.getElementById('text1').value;
     var regex = /[/s]/g;
     var str1 = document.getElementById('text2').value;
     var s = str.split('');
     str = s.sort().join('');
     var w = str1.split('');
     str1 = w.sort().join('');
     console.log(str);
     console.log(str1);
     console.log(str == str1);
 }


//END OF TASK3
//TASK 4
function winner(){
    var num1 = Math.floor(Math.random() * (1001));;
    document.getElementById('number1').innerHTML=num1;

    var num2 = Math.floor(Math.random() * (1001));;
    document.getElementById('number2').innerHTML=num2;

    num1 = num1 % 3;
    num2 = num2 % 3;

    if((num1 === 0 && num2 === 1) || (num1 === 1 && num2 === 0))
    {
       document.getElementById('result').innerHTML = "Human wins";
    }
    if((num1 === 1 && num2 === 2) || (num1 === 2 && num2 === 1))
    {
        document.getElementById('result').innerHTML = "Cockroach wins";
    }
    if((num1 === 0 && num2 === 2) || (num1 === 2 && num2 === 0))
    {
        document.getElementById('result').innerHTML = "Nuclear bomb wins";
    }
}

//END OF TASK4
//TASK5
let request = new XMLHttpRequest();
request.open('GET','https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=ecd96f38ab9cbbe978b7');
request.send();
request.onload = () => {
    console.log(request);
    if(request.status === 200)
    {
        console.log(JSON.parse(request.response));
    }
    else{
        console.log(`error ${request.status} ${request.statusText}`);
    }
}