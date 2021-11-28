//แบบเดิม

function fullname(fname,lname){
    return fname+lname;
}
console.log(fullname("Ohm","Phatcharaphol"));
//แบบใหม่
fullname = (fname,lname) => fname+lname
setAge=(age)=>"อายุ = "+age

console.log(fullname("Ohmmm","Phatcharaphol"));
console.log(setAge(20));