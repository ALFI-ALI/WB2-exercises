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