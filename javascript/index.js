//console.log('Hello');
//console.log('I like pizza');

//document.getElementById("myH1").textContent = 'Hello';
//document.getElementById("myP").textContent = 'i like Pizza '
//variables = a container that stores a value . behavaes if it were the vlaue it contained 

// Declaration let x ;
// 2. assignment  x = 100 ;
//Numbers 
//let x = 123;
//x = 123 ;
//console.log(x);

//let age = 25 ;
//console.log(age) ;

//console.log(`you are ${age} years old`)
//console.log(typeof age);
//string
//string can be name ,email, they can use numbers but they can noot be used for math calculation
//let firstname = "bro" ;
//console.log( typeof firstname);
//console.log(`your name is ${firstname}`);

//Boolean
// either they are true ofr they are false 

/*let online = true ;
let forSale = true ;
let isStudent = true ;

console.log(typeof online);
console.log(`bro is online: ${online} `);
console.log(`Is this car for sale : ${forSale}`);
console.log(`enrolled: ${isStudent}`);
*/

              // final explanation
/*
variable = A container that stores a value 
           and behaves as is it were the value it contains

let fullname = "round robin"; // Number 
let age = 25 ;                 // String
let isStudent = true ;          // boolean

document.getElementById("p1").textContent = `Your Name is ${fullname}`;
document.getElementById("p2").textContent = `Your  age is ${age }`;
document.getElementById("p3").textContent = `Enrolled: ${fisStudent}`;

there are vast ranges of variables which we will be discussing later for now we need to keep this there in your mind 

*/



//ARITHMETIC OPERATORS
// arithmetic operator = operands(alues , variables , et .)
//                       operators(+ , - , * , / )
//                       ex . 11 = x - 5;
/*let robin = 30; 
robin += 1;        
robin -= 1;        
robin *= 2 ;       argumentated assignment operators
robin /= 2;
robin **= 2;     
robin++;
robin--;

console.log(robin);

operator precedence
1 . parenthesis ()
2. exponent 
3 . multiplication & division & modulo
4 . addition and substraction
*/
//let result = 1 + 2 *3 + 4**2;
//console.log(result);


//ACCEPTING USER INPUT 
// 1. EASY WAY = WINDOW PROMPT 
// 2. PROFESSIONAL WAY = HTML TEXTBOX

//let username = window.prompt("enter your username");
//console.log(username);
//let username ;

//document.getElementById("myButton").onclick  = function()
//{
 //  username = document.getElementById("myText").value;
// document.getElementById("myH1").textContent = `Hello $//{username}`;
//  console.log(username);
//}

//TYPE CONVERSION = change the datatype of value to another (strings , numberes , boolean )


//let age = window.prompt("How old are you ?");
//age = Number(age);
//age += 1;
//console.log(age , typeof age);

//let x = "pizza" ;
//let  y= "pizza" ;
//let z= "pizza" ;

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x ,typeof x);
//console.log(y ,typeof y);
//console.log(z ,typeof z);


// const = a variable that cant be chamged 
//const pi = 3.14159 ;
//let radius ;
//let cur ;
//radius = window.prompt('enter the radius of circle');
//radius = Number(radius);
//cur = 2*pi*radius;
//console.log(cur);
const PI = 3.14589 ;
let radius;
let cur ;


document.getElementById("myButton").onclick = function()
{
   radius = document.getElementById("myText").value ;
   radius = Number(radius);
   cur = 2* PI * radius ;
   document.getElementById("myH1").textContent = `The cur is :  ${cur}`;
   document.getElementById("myButton").textContent =null;
}

