//Array reduce

const data = [10,20,30,40];

const mapData = data.map(Element=>100);

console.log(mapData);

const filterData = data.filter(Element=>Element>=20);

console.log(filterData);

// array.reduce((ค่าที่ถูกประมวลผล,Element)=>{},ค่าเริ่มต้น)
const reduceData = data.reduce((value,Element)=>{
    const total = Element + value
    return total
},0)

console.log(reduceData);

const cart =[
    {name:"bag",price:3000},
    {name:"book",price:150},
    {name:"camera",price:30000}
]

const total = cart.reduce((value,Element)=>{
    const total = Element.price+value
    return total
},0)

//ลดรูป
const total1 = cart.reduce((value,Element)=>Element.price+value,0)

console.log(total);