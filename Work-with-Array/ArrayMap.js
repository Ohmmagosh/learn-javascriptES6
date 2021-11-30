//Array map

const number = [10,20,30,40];

// const result = number.map(Element=>{const a = Element * 214; return a});
const result = number.map(Element=>Element*2)

console.log(`Array map = ${result}`);

const data = ["red","green","blue"];

const result2 = data.map((Element,i)=>{
    return `สีที่${i+1} คือสี ${Element}`
})

console.log(result2);

const data1 = [
    {day:"01/06/2564",weather:"hot",temp:37},
    {day:"02/06/2564",weather:"rain",temp:32},
    {day:"03/06/2564",weather:"cool",temp:27},
    {day:"04/06/2564",weather:"snow",temp:-1},
]

const result3 = data1.map(e=>e.weather)
console.log(result3)