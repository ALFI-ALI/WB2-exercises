/*let xone = 5;
let xtwo = 3;
let yone = 2;
let ytwo = 6;
let distance = Math.sqrt(((xtwo-xone) **2) + ((ytwo-yone) **2));*/
function calculateDistance(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Example usage:
let distance = calculateDistance(1, 2, 4, 6);
console.log(distance); // Output: 5



