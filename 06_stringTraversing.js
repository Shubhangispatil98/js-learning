var word = "javaScript";
for (i = 0; i < word.length; i++)
{
    var element = word.charAt(i);
    console.log(element);
}

console.log("WAP to count how many time char a occured in word");
var word = "javaScript";
var count = 0;
for (i = 0; i < word.length; i++) {
    var char = word.charAt(i);
    if (char == 'a') {
        count = count + 1;
    }
}
console.log(`char a count is:${count}`);

