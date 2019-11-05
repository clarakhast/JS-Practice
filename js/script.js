//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

const jobTitle = `Front-end Developer`;
const geographicLocation = `Canada`;
let annualSalary = 100000;
let companyName = `CIG`;

document.getElementById(`fortune`).innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, making ${annualSalary} for ${companyName}.`;




//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = 2019;
let myBirthday = 1992;
let yourAge = currentYear - myBirthday;

document.getElementById(`age`).innerHTML = `You are ${yourAge} years old.`;



//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 27;
let maxAge = 87;
let estimatedAmount = 2;
let lifetimeSupply = (maxAge - currentAge) * 365 * 2;

document.getElementById(`supply`).innerHTML = `You will need ${lifetimeSupply} to last you until the ripe old age of ${maxAge}`

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let circleRadius = 15;
let circleCircum = 2 * 3.14 * circleRadius;
 document.getElementById(`circumference`).innerHTML = `The circumference is ${circleCircum}.`

 let circleArea = 3.14 * (circleRadius ** 2);
 document.getElementById(`area`).innerHTML = `The area is ${circleArea}.`


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

var celciusTemp = 32;
var fahrenheitTemp = (celciusTemp * 9 / 5) + 32;

document.getElementById('fahrenheit').innerHTML = `${celciusTemp}°C is ${fahrenheitTemp}°F.`

var fahrenheitTemp = 105;
var celciusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.getElementById('celcius').innerHTML = `${fahrenheitTemp}°F is ${celciusTemp}°C.`