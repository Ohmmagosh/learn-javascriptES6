//push, pop, shift, unshift

const data = [10,20,30];

// data.push(200);
// data.push(2000);
// data.push(2500);
data.push(...[100,200,300]);
console.log(data);

data.pop();
console.log(data);
data.pop();
console.log(data)

data.shift();
console.log(data);
data.unshift(123);
console.log(data);