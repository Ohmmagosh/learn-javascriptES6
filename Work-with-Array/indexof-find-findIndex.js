//ค้นหาข้อมูลใน Array
//indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้  undefine
//findindexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const color = ["red","green","blue","grey","white"];

const index = color.indexOf("blue");
console.log(index);

const find1 = color.find(Element=>Element==="blue");
const find2 = color.find(Element=>Element==="black");
console.log(find1);
console.log(find2);

const search1 = color.findIndex(Element=>Element==="blue"); 
const search2 = color.findIndex(Element=>Element==="black"); 
console.log(search1);
console.log(search2);