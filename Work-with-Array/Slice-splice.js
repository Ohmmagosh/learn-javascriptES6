//splice, slice

/*
splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่ง)
slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)
*/

const data = [10,20,30,40,50];

data.splice(1,2,999,111);

console.log(data);

const data1 = [1,2,3,4,5,6,7,8,9,10];

const lastdata = data1.slice(1,3);
console.log(lastdata);