let a;
a = 7;
let b;
b = a;
let a0 = 9;
let myFirstName = 'Maks';
let myLastName = 'Kiselev';
// some math
let a1 = 5;
let b1 = 10;
let c1 = 'I am a';
a1 = a1 + 1;
b1 = b1 + 5;
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
let a3 = 11;
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
const lastLetterOfLastName = lastName1[lastName1.length - 1]; // Change this line
// get the value of the second-to-last letter

const lastName2 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName2[lastName2.length - 2]; // Change this line
// Nest one Array within Another Array
const myArray1 = [
    [1, 2, 3],
    ["ass", 13]
];
// Modify Array Data With Indexes
const myArray2 = [18, 64, 99];
myArray2[0] = 45
// Manipulate Arrays With push()
const myArray3 = [
    ["John", 23],
    ["cat", 2]
];
myArray3.push(["dog", 3]);
// pop()
const myArray4 = [
    ["John", 23],
    ["cat", 2]
];
const removedFromMyArray4 = myArray4.pop();
// Manipulate Arrays With shift()
const myArray5 = [
    ["John", 23],
    ["dog", 3]
];
const removedFromMyArray5 = myArray5.shift();
// Manipulate Arrays With unshift()
const myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35])
// Passing Values to Functions with Arguments
function functionWithArgs(p1, p2) {
    console.log(p1 + p2)
};
functionWithArgs(1, 2);
//Return a Value from a Function with Return   
function timesFive(num) {
    return num * 5;
}
//   about VARIABLE;
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5
}
// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// boolean
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    } else return "No, that was false"
}
trueOrFalse(true)
trueOrFalse(false)

// equal or not equal, === mean strict equal, == convert both values on same type
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// !== Strictly Not Equal, != not equal(convert on one type)
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

// operator > (convert on one type)
function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }
    if (val > 10) { // Change this line
        return "Over 10";
    }
    return "10 or Under";
}
// >= 
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
// <
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
// <=
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
// operator &&
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
// operator ||
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
// if..else 
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else result = "5 or Smaller";
    return result;
}