//Array Filter
const data = [10,20,30,40];

const result = data.filter(Element=>{return Element>=20});
console.log(result);

const data1 = [
    {name:"jonh",salary:25000,department:"programmer"},
    {name:"jib",salary:50000,department:"marketing"},
    {name:"jad",salary:15000,department:"trainy"},
    {name:"jai",salary:15000,department:"trainy"},
]
const result1 = data1.filter(Element=>{return Element.salary > 15000});
const result2 = data1.filter(Element=>Element.salary > 15000);
const result3 = data1.filter(Element=>Element.salary >15000).filter(Element=>Element.department==="programmer");
 
console.log(result1);
console.log(result2);
console.log(result3);