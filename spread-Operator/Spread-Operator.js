//Spread Operator

const newArr = [100,200,300];

const data1 = [10,20,newArr];
const data = [10,20,...newArr];

console.log(data1.length);
console.log(data.length);
console.log(data1);
console.log(data);

const color = ["black","yellow"];
const allColor = ["red","green","blue",...color];
const color1 = ["black","yellow"];
const allColor1 = ["red","green","blue"];

allColor1.push(...color1);

console.log(allColor1)

console.log(allColor);