let ordernum = 101;
let itme = ordernum;
let orderrstatus = 'processing';
let message = `order ${ordernum}'s status is : ${orderrstatus}`;
const orderstatus = document.getElementById("orderstatus");
orderstatus.innerHTML= message;
function chick(){
    let itme = itme +1;
    const chick = document.getElementById("chick").innerHTML = itme;
}