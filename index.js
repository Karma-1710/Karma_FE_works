// Question 1

const products = [
    {productCode:1, itemName:'TV'},
    {productCode:2, itemName:'Fridge'},
    {productCode:3, itemName:'Phone'},
    {productCode:4, itemName:'Washing Machine'},
    {productCode:5, itemName:'AC'},
];
const newProducts = [
    {productCode:6, itemName:'Tablet'},
    {productCode:3, itemName:'Phone'},
    {productCode:7, itemName:'Keyboard'},
    {productCode:5, itemName:'AC'},
    {productCode:8, itemName:'Mouse'},
];
const uniqueProducts = [...products, ...newProducts];

var str = [];
for(i=0;i<uniqueProducts.length;i++){
    str.push(JSON.stringify(uniqueProducts[i]));
}
var filter = [];
filter = str.filter((item, index) => str.indexOf(item) === index);
console.log(filter);

// Question 2

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let array3 = array1.map((value, index) => value + array2[index]); 
console.log(array3);