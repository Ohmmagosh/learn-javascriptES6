//Rest parameter
//summation=(x,y)=>{return x+y}

//summation=(x,y,z,a)=>{return x+y+z+a}

summation=(...numberArr)=>{let total = 0;for(let number of numberArr) total+=number ;return total}

console.log(summation(100,59));
console.log(summation(100,59,20,10,200));