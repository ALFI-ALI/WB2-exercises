/*let friendsInvited = 4;
let costperperson = 20 ;
let totalCost = friendsInvited * costperperson ;
console.log(totalCost)
if (totalCost >= 0) {
    console.log('The total cost for an epic Avengers movie night with 4 friends is $80')
}
else {
console.log('Looks like it  a solo Avengers adventure tonight! No cost for extra tickets.')
}*/

////////////////////////////////////////////
let friendInvited = 6;
let costPerPerson = 15;
let totalCost = friendInvited*costPerPerson
let discount = .10;


if(friendInvited < 5) {
    console.log(`The total cost for an epic Avengers movie night with ${friendInvited} friends is $${totalCost}`);
} 
else if(friendInvited >= 5) {
totalCost = (costPerPerson*discount) + costPerPerson;
    console.log(`Yay we have more than 5 friends coming we get a discount of 10%. It will now be $${totalCost} per person`);
}



