console.log("---------------Step1----------------");
let show = () => {
  console.log(`"Good Morning,Today is Monday"`);
};
show();

console.log("----------------Step2--------------------");
let fun = (num1, num2, num3 = 1) => {
     let result = num1 * num2 * num3;
    console.log(`multiplication of numbers ${num1},${num2},${num3} is:${result}`);
      
};
fun(5, 5, 2);
fun(10, 4);

console.log("-----------------Step3-----------------------");

let add = (n1, n2, n3, n4, n5) => {
    let res = (n1 + n2 + n3 + n4 + n5);
    return res;
}
let res = add(100, 100, 200, 349, 756);
console.log(`addition of numbers is:${res}`);
let res1=add("I am ", "learning ", "ES6 ", 'featurs ', "in depth");

console.log(`Concatenation of word is: ${res1}`);