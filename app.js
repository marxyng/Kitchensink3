//create a variable that contains your name as a value
let name = "Marco";
// create a const that contains the number of states in the U.S. and name it appropriately
const states = 52;
//Compute the result of adding 5 and 4 and store it in an appropriately named variable
let results = 5 + 4;

//Write a function called sayHello that displays an alert that says Hello World!
function sayHello (){
    alert('Hello World!');

}

sayHello();

function checkAge(name, age){
if(age < 21) {

    alert("Sorry " +  name + " you aren't old enough to view this page!");
}
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let veggies = ["sweet potatoes", "tomatoes", "cabbage", "squash", "spinach"];
for(let i = 0; i < veggies.length; i++){

console.log(veggies[i]);
} ;

/*create an array of 5 objects that contain name and age properties.
Make up  names and ages for each object, making sure some are younger than
21 and some are 21 +*/

let people= [

{ name: "Jason", age: 41},
{name: "Chris", age : 23},
{name: "Jeffrey", age: 18},
{name: "Thomas", age: 20 },
{name: "David", age: 51},
];

//let solution= []

people.forEach(checkAge(people.name, people.age))
console.log(people.name, people.age);





/*
for(let j = 0; j< people.length; j++){
    
  
  checkAge();
solution.push(people);
  console.log(solution);
 */
    //console.log(checkAge(people.name, people.age));
//}

//create a function called getLength that takes any word as an argument. the function
//the function should return the number of characters in 
// the string
function getLength(word){

   
    console.log(word.length);
}


//call the getLength function, passing 'Hello World' as the argument.  Sore the returned reult of that function in a variable
let storage= getLength('Hello World')
if(storage % 2 == 0){
console.log("The world is nice and even!");

}else {
    console.log("The world is an odd place!");
}
