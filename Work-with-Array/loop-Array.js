//For loop, Foreach, Forof

const data = [10,20,30,40,50];

// for(let i = 0; i < data.length; i++){
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
//}
// let sum = 0;

// data.forEach(Element =>{
//     console.log(`สมาชิคใน Array Data = ${Element}`);
//     sum += Element
//     console.log(`ผลรวม = ${sum}`)
// })

for (const Element of data){
    if(Element>=30) break
    console.log(`สมาชิก Array Data ${Element}`)
}