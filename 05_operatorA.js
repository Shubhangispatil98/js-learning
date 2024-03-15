console.log("-----Step1-----");
function squareOfWordLength(arg)
{
    
    exponential = arg.length ** 2;
    return exponential;
   
}


var str1="JavaScript";
console.log(`Length of word JavaScript is:${str1.length}`);
var returnVal = squareOfWordLength("JavaScript");
console.log(`square of word JavaScript is:${returnVal}`);

var str2 = "Google Chrome";
console.log(`Length of word Google Chrome is:${str2.length}`);
var returnVal=squareOfWordLength("Google Chrome");
console.log(`square of word Google Chrome is:${returnVal}`);

var str3 = "Developer Smart";
console.log(`length of Developer Smart is:${str3.length}`);
var returnVal = squareOfWordLength("Developer Smart");
console.log(`square of word Developer Smart is:${returnVal}`);


console.log("-----Step2-----");
function noArgNoret()
{
    var string = "I am Angular Developer";
    console.log(`Given string is:${string}`);
    lengthOfString = string.length;
    console.log(`string length is:${lengthOfString}`);
    totalNoOfWords = string.split(" ");
    totalNoOfWords = totalNoOfWords.length;
    console.log(`Total No of Words:${totalNoOfWords}`);

    result = lengthOfString / totalNoOfWords;
    console.log(`result After dividing by words is:${result}`);

    result1 = lengthOfString * totalNoOfWords;
    console.log(`result After multiply by words is:${result1}`);
    
}
noArgNoret();