let a;
a = 7;
let b;
b=a;
let a0 = 9;
let myFirstName = 'Maks';
let myLastName = 'Kiselev';
// some math
let a1 = 5;
let b1 = 10;
let c1 = 'I am a';
a1 = a1 + 1;
b1 = b1+ 5;
c1 = c1 + " String!";
// change var to let
let catName = "Oliver";
let catSound = "Meow!";
// math again
const difference = 45 - 23;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 11;
//is the same as myVar=myVar-1
myVar--;
let myVars = 11;
//is the same as myVar=myVar+1
myVars++;
// remainder 11/3 = 3; 3*3=9; 11-9=3 --> remainder
const remainder = 11 % 3;
// a=a+3 == a+=3
let a2 = 3;
let b2 = 17;
let c2 = 12;
a2 += 12;
b2 += 9;
c2 += 7;
// a=a-3 == a-=3
let a3= 11;
let b3 = 9;
let c3 = 3;
a3 -= 6;
b3 -= 15;
c3 -= 1;
// a=a*3 == a*=3
let a4 = 5;
let b4 = 12;
let c4 = 4.6;
a4 *= 5;
b4 *= b;
c4 *= 10;
// a=a/3 == a/=3
let a5 = 48;
let b5 = 108;
let c5 = 33;
a5 /= 12;
b5 /= 4;
c5 /= 11;
// how to "" in the string
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// how to "<a>" in the string
const myString = '<a href="http://www.example.com" target="_blank"> Link </a>';
// vot takaya huita:|FirstLine
//                  |    \SecondLine
//                  |ThirdLine
const myStrg = "FirstLine\n\t\\SecondLine\nThirdLine"
// Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// last letter of the string
// Setup
const lastName1 = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName1[lastName1.length-1]; // Change this line
// get the value of the second-to-last letter

const lastName2 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName2[lastName2.length-2]; // Change this line
// Nest one Array within Another Array
const myArray1 = [[1,2,3], ["ass", 13]];
// Modify Array Data With Indexes
const myArray2 = [18, 64, 99];
myArray2[0] = 45
// Manipulate Arrays With push()
const myArray3 = [["John", 23], ["cat", 2]];
myArray3.push(["dog", 3]);
// pop()
const myArray4 = [["John", 23], ["cat", 2]];
const removedFromMyArray4 = myArray4.pop();
// Manipulate Arrays With shift()
const myArray5 = [["John", 23], ["dog", 3]];
const removedFromMyArray5 =myArray5.shift();
// Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])