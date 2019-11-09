// javascript function
function myFunction(p1,p2) {
    return p1 * p2;
}
document.getElementById('demo').innerHTML= myFunction(3,4);

function toCelsuis(f) {
    return (5/9) * (f-32);
}

document.getElementById("demo").innerHTML = toCelsuis(50);


// something new here

saySomethin();

function saySomethin() {
    var carName = 'Volvo';
    document.getElementById('demo1').innerHTML = typeof carName + carName;
}
// This is how to access a function property as a method.
var man = {
    firstName: 'Sabir',
    lastName: "Khalili",
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

document.getElementById("demo").innerHTML = man.fullName();

// This is how to access a function property as a property.
var myPerson = {
    firstName: "Ali",
    lastName: "Khadim",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("test").innerHTML = myPerson.fullName;
// How functions work in javascript.accordion?

function myFunction(name,lastname) {
    document.getElementById('demo').innerHTML = "The peron with the name" + name + " " + lastname + " is my friend";
}

function newFunction(text) {
    document.getElementById("test").innerHTML = text;
}
var x = heyFunction(4,5);
document.getElementById("test").innerHTML = x;


function heyFunction(a, z) {
    return a + z;
}

document.getElementById('test').innerHTML = Math.round(5.7);
document.getElementById("test").innerHTML = Math.random();
document.getElementById("test").innerHTML = Math.floor(Math.random() * 10);

function newFunction(min, max) {
    return Math.floor(Math.random() * (max- min) + min);
}


var d = new Date();
document.getElementById("test").innerHTML = d.getTime();

var t = new Date();
document.getElementById("test").innerHTML = t.getFullYear();
var dTime = new Date();
document.getElementById("test").innerHTML = dTime.toUTCString();

var w = new Date();
var days = ["Sat","Sun","Mon","Tue","Wed","Thur","Fri"];
document.getElementById("test1").innerHTML = days[w.getDay()];



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
