//ทำงานกับ Object

//ตัวแปรเก็บข้อมูล
const customerName = "Phatcharaphol"
const age = 22
const address = "bangkok"

const customer = {customerName,
    age,
    address,
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า ="+this.customerName)
    }
}

customer.showData();