//block Scope (let/constant)

//การเขียนแบบเดิม
//var เป็นแบบ global variable
let x = 10;
let y = 50;
if (x===10){
    let y = 500;
    console.log("y = "+y);
}
console.log("y = "+y);

const A = 100;
console.log("A = ",A);