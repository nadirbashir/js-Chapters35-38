// /******Quest. 1 *********/

// function currentDate(){
//     var d = new Date();
//     document.write(d);
// }
// currentDate();

// //b)
// var d;
// function currentDate(){
//     d = new Date();
//     return d;
// }
// document.write(currentDate())

// /******Quest. 2 *********/
// var firstName , lastName;
// function greet(firstName,lastName){
//         return "Welcome! " + firstName + " " + lastName;
// }
// document.write(greet("Nadir", "Bashir"));

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your first name:");
// function greet(){
//     document.write("Welcome! " + firstName + " " + lastName);
// }
// greet();

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your first name:");
// function greet(){
//     return "Welcome! " + firstName + " " + lastName;
// }
// document.write(greet());

// function greet(){
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your first name:");
//     return "Welcome! " + firstName + " " + lastName;
// }
// document.write(greet());

// /******Quest. 3 *********/
// function sum(){
//     var num1 = +prompt("Enter first Number");
//     var num2 = +prompt("Enter second Number");
//     return num1 + num2;
// }
// alert("Sum = " + sum());

// /******Quest. 4 *********/

// var num1, num2, op;
// function calculate(num1, num2, op){
//     if(op === "+"){
//         return num1 + num2;
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else if(op === "*"){
//         return num1 * num2;
//     }
//     else if(op === "/"){
//         return num1 / num2;
//     }
//     else if(op === "%"){
//         return num1 % num2;
//     }
//     else if(op === "**"){
//         return num1 ** num2;
//     }
//     else{
//         return "invalid operator";
//     }
// }
// document.write("<br>" + calculate(8,4,"+"));
// document.write("<br>" + calculate(8,4,"-"));
// document.write("<br>" + calculate(8,4,"*"));
// document.write("<br>" + calculate(8,4,"/"));
// document.write("<br>" + calculate(8,4,"%"));
// document.write("<br>" + calculate(8,4,"**"));
// document.write("<br>" + calculate(8,4,"&"));

// /******Quest. 6 *********/
// function counting(start,endVal){
    
//     for(var i = start; i <= endVal; i++){
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting value:"), +prompt("Enter End value:"));

// /******Quest. 7 *********/
// function fact(fact){
//     var num = fact;
//     for(var i = 1; i < fact ; i++){
//         num *= i;
//     }
//     return num;
// }
// document.write(fact(10));

// // b)
// function fact(fact){
//     var factorial = fact;
//   for(var i = fact - 1; i > 0 ; i--){
//     factorial *= i;
//   }
//   return factorial;
// }
// document.write(fact(10));

// /******Quest. 8 *********/

// function CalculateHypotenuse(){
//     var base = +prompt("Enter Base");
//     var perp = +prompt("Enter Perpendicular");
//     var hyp = (base ** 2) + (perp ** 2);
//     function calculateSquare(){
//         return Math.sqrt(hyp);
//     }
//     return "Hypotenous = " + calculateSquare();
// }
// document.write(CalculateHypotenuse());


// /******Quest. 9 *********/
// var height = 10;
// function area(width,height){
//     return  width * height;
// }
// document.write("Ärea of the rectangle is: " + area(8,height));


// /******Quest. 10 *********/
// function checkPalindrome(word){
//     var check = "";
//     for(var i = word.length - 1; i >= 0; i--){
//         check += word[i];
//     }
//     if(check === word){
//         alert("The word " + word + " is palindrome");
//     }
// }
// checkPalindrome(prompt("Enter a word to check if it is palindrome"))



// /******Quest. 11 *********/
// function capitalize(sentence){
//     var words = sentence.split(" ");
//     for(var i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     document.write(words.join(" "));
// }

// capitalize(prompt("Enter a sentence"));

// b)
// function capitalize(str){
//     document.write(str[0].toUpperCase());    
//     for(var i = 1; i < str.length; i++){
//         if(str[i] === " "){
//             document.write(str[i] + str[i+1].toUpperCase())
//             i++;
//         }else{
//             document.write(str[i])
//         }
//     }
// }

// capitalize(prompt("Enter a sentence"));

// /******Quest. 12 *********/
// function longestWord(sentence){
//     var words = sentence.split(" ");
//     var longest = words[0];
//     for(i = 0; i < words.length; i++){
//         if(words[i].length > longest.length){
//             longest = words[i];
//         }        
//     }
    
//     document.write("The Longest word in " + sentence + " is: " + longest);
// }

// longestWord(prompt("Enter a sentence to check longest word"));


// /******Quest. 13 *********/

function checkCharRepeat(sentence){
    var char = "a";
    var count = 0;
    for(i = 0; i < sentence.length; i++){
        if(sentence[i] === char){
            count += 1;
        }        
    }
    
    document.write("The " + char + " is repeated: " + count + " times");
}

checkCharRepeat(prompt("Enter a sentence to check longest word"));
// /******Quest. 1 *********/
