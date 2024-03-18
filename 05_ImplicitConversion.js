console.log("----Numeric String Used with + gives string typem----");
var result;
result = '3' + 2;
console.log(`result of '3'+2 is : ${result}`);

result = '3' + true;
console.log(`result of '3'+ true is : ${result}`);

result = "3" + undefined;
console.log(`result of '3'+ undefined is : ${result}`);

result = "3" + null;
console.log(`result of '3'+ null is : ${result}`);
console.log("-----------------------------------------------------");

console.log("----Implicit boolean conversion to Number----");

var result;
result = '4' - true;
console.log(`result of '4' - true is: ${result}`);

result = 4 + true;
console.log(`result of '4' + true is: ${result}`);

result = 4 + false;
console.log(`result of '4' + false is: ${result}`);

console.log("-------------------------------------------------------");
console.log("----Implicit string conversion to Number----");

var result;
result = '4' - '2';
console.log(`result of '4'-'2' is :${result}`);

result = '4' - 2;
console.log(`result of '4'-2 is :${result}`);

result = '4' * 2;
console.log(`result of '4'* 2 is :${result}`);

result = '4' / 2;
console.log(`result of '4'/ 2 is :${result}`);
console.log("------------------------------------------------");

console.log("---Undefined Used with number, boolean or null ---");
var result;
result = 4 + undefined;
console.log(`result of 4 + undefined is: ${result}`);

result = 4 - undefined;
console.log(`result of 4 - undefined is: ${result}`);

result = true + undefined;
console.log(`result of true + undefined is: ${result}`);

result = null + undefined;
console.log(`result of null + undefined is: ${result}`);
