console.log("-----Step1------");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "water Melon"];
var firstElement = fruits_seasonal[0];
console.log(`Array first Element is:${firstElement}`);
const len = fruits_seasonal.length - 1;
const lastElement = fruits_seasonal[len];
console.log(`Array Last Element is:${lastElement}`);

console.log(("-------Step2------"));
fruits_seasonal.unshift("PaPaya");
console.log(fruits_seasonal);

console.log("-----step3-----");
console.log("befor removing mango:", fruits_seasonal);
fruits_seasonal.splice(4, 1);
console.log("After removing Mango:", fruits_seasonal);

console.log("------Step4-----");
console.log("Original Array:", fruits_seasonal);
var last = fruits_seasonal.push("Pineapple");
console.log("Array after adding element at last", fruits_seasonal);

console.log("------Step5-----");
console.log("Original Array:", fruits_seasonal);
var ele = fruits_seasonal.splice(4, 0,"Dragon Fruit")
console.log("After adding element", fruits_seasonal);

console.log("------Step6-----");
console.log("Original Array:", fruits_seasonal);
fruits_seasonal[2] = "Kiwi";
console.log(fruits_seasonal);

console.log("------Step7-----");
console.log("Original Array:", fruits_seasonal);
 const subArray=fruits_seasonal.slice(1, 5);
console.log("Array after slice is:", subArray);

console.log("------Step8-----");
console.log("Original Array:", fruits_seasonal);
var fruit = fruits_seasonal.length - 1;
var fruit2 = fruits_seasonal.length - 2;
var fruit3 = fruits_seasonal.length - 3;
console.log("last 3 elements are:", fruits_seasonal[fruit3],fruits_seasonal[fruit2] , fruits_seasonal[fruit]);