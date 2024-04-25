let length = 10;
let width = 20;
let box = 12;
let extra = .10;
let area = length * width;
let numberofboxes = Math.ceil(area/box); 
let extraboxes = Math.ceil((numberofboxes * extra) + numberofboxes);
console.log(numberofboxes.toFixed());
console.log(extraboxes.toFixed());