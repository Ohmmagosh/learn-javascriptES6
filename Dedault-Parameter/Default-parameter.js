
//Default-parameter

getDataCustomer=(CustomerName,customerAddress = "bangkok")=>{
    const address = `ชื่อลูกค้า : ${CustomerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("jonh","bangkok"));
console.log(getDataCustomer("May","chonburi"));
console.log(getDataCustomer("Man"));