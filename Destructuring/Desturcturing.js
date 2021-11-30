//Destructuring

//Array

const color = ["red","green","blue"];
// const red = color[0];
// const green = color[1];
// const blue = color[2];

const [,, blue] = color;

// console.log(red);
// console.log(green);
console.log(blue);

//object

const product ={
    productName : "computer",
    price : 20000,
    stock : 10
}

// const name = product.productName;
// const price = product.price;
// const stock = product.stock;

// const {productName: productName, price: price, stock: stock} = product
const {productName, price, stock} = product

console.log(productName);
console.log(price);
console.log(stock);

