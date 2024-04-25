/*let agekids = 12;
let price;
price = agekids * 9.95;

if (agekids >= 6) {
    price = price * .9;
    
}
console.log(price);


let amount = 12.50;
let tax = amount  * .08;  // 8% sales tax 
let taxExempt = false;   // boolean variable
if(taxExempt == true ){
    tax = 0 ;
}
console.log(tax);*/
let age = 20;

if (age > 18) {
    console.log('YOu are old enough the watch the adventures');
}
else if (age < 8)  {
    console.log('You should watch a different movie');
}
else {
    console.log('There are many other movies to watch');
}

/////////////////////////////////////////////
let dayOfWeek = 'Friday';

// Decide on movie night
if (dayOfWeek === 'Friday' || dayOfWeek === 'Saturday' ) {
    console.log("It's Friday! Perfect night for a Marvelous 'Avengers' movie marathon!");
} else {
    console.log("Why wait for Friday? Any night is good for 'The Avengers'!");
}



/////////////////////////////////////////////////////////////////
// List of Avengers
let avengers = ['Iron Man', 'Thor', 'forrest gump', 'Captain America']; // Array

// Check if Hulk is part of the team
if (avengers.includes('Hulk')) {
    console.log("The Hulk is in! Expect some smashing action!");
} else {
    console.log("It seems the Hulk is out. Hope the rest can handle it!");
}



///////////////////////////////////////////////////////////////////////
// Define the movie title
let movieTitle = 'The Avengers';

// Check if the movie is 'forrest gump'
if (movieTitle === 'forrest gump') {
    console.log("Prepare for runing  with 'forrest gump'!");
} else {
    console.log("Not watching 'forrest gump'? Hopefully, your choice is still super!");
}