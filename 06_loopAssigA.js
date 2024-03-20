// var string = "I am very good IT Developer";
// var vowel ="aeiou";
// var count = 0;
// for (let index = 0; index <= string.length; index++) {
//     let char = string.charAt(index);
   
//     if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
//     {
//         count++;
//     }
// }  
// console.log(`number of vowels present is ${count}`); 

console.log("--------------step1--------------------");
const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++)
{
    let char = word.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
      vowelsCount++;
    }
}
console.log(`number of vowels present is ${vowelsCount}`); 

// write a function to get the sum of cube of numbers from 1 to 5
console.log("---------------------Step2-----------------");
function sumOfCube()
{
    let sum = 0;
   for (let index = 1; index <= 5; index++) {
     sum = sum + index * index * index;
    }
    return sum; 
}

 console.log('Sum of Cube is:',sumOfCube());   

console.log("------------------Step3----------------");

function oddPositionChars(word)
{
    for (let index = 0; index <= word.length; index++){
        const element = word.charAt(index);
     
        if (index%2!=0 && element !=" ")
        { 
          
            console.log(element);
        }
    }
}
console.log("odd position chars are:")
oddPositionChars("Hard Work always Pays back");
console.log("odd position chars are:");
oddPositionChars("Soon I will be UI IT Champ");
