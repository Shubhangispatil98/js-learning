console.log("====Step1====");
function greaterNumber(num1, num2)
{
    var result = num1 > num2 ? num1: num2;
    console.log(`greater number amongs ${num1} and ${num2} is:${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899)

console.log("====Step2====");
function isEvenOrOddNum(num1)
{
    var result = (num1 % 2 == 0) ? "Even Number" : "odd Number";
    console.log(`given number ${num1} is ${result}`);
    return result;
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("====Step3====");
function wordLength(string1)
{
    var result = string1.length;
    var evenOrOdd = (result % 2 == 0) ? "Even" : "Odd";
    console.log(`length of a ${string1} is ${result} and it's ${evenOrOdd}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");