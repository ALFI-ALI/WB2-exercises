/*let payRate = 20 ;
let hoursworked = 45;
let regular = 40 ;
let overtime = 1.5;
let pay = payRate * hoursworked ;
let regularhours = regular * payRate ;
let overtimehours = hoursworked - regular;
let overtimee = payRate * overtime ;
let overtimepay = overtimehours * overtimee ;
let totalovertimepay = regularhours + overtimepay ;
console.log(totalovertimepay)
 
//let payRateovertime = payRate * overtime ;//
if (hoursworked > 40) {
    
    console.log(`pay the overtime hours at 1.5 times the rate of regular hours`);
}
else if (hoursworked < 40) {
    console.log(`pay the regular hours`);
}*/

/////////////////////////////////////////////////////////
let payrate = 30;
let hoursworked = 45;
let regular = 40;
let overtime = 1.5;
/*let pay = hoursworked * payrate; //hrs*pay */
let regularhours = regular * payrate;//40hr work week
let overtimehours = hoursworked - regular; //5 ot hr
let ot = payrate * overtime;//30*1.5
let overtimepay = overtimehours * ot;//5*1.5
let totalovertime = regularhours + overtimepay;//40 hr workweek + 5*1.5
if(hoursworked <= 40) {
    console.log(`your pay is ${pay}`);
}
else if(hoursworked > 40) {
    console.log(`your overtime pay is ${totalovertime}`);
}