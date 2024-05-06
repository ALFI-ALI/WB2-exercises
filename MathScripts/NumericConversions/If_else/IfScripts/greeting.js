let currenthour = 4 ;
let greetings ;
if (currenthour <= 12) {

    greetings = 'good morning !' ;
}
else if (currenthour <= 4) {
    greetings = 'good day';
    
}
else{
    greetings= ' good evening !';
}
console.log(greetings)
//////////////////////////////////

let time = new Date().getHours();
if (time < 10) {
    console.log('good morning');
    
}else if (time < 20){
    console.log('good day');
}else{
    console.log('good evening');
}