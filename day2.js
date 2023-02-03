//  problem 1
var fruits = ["apple", " banana", "orange"];
console.log(fruits);

var Positionindex = fruits.indexOf("banana");
console.log(Positionindex);
fruits.splice(1, 1, "mango");
console.log(fruits);
fruits.pop();
fruits.push("watermelon");
console.log(fruits);
console.log("problem 1 completed");

// problem 2
var my = 85; 
var tom = 66; 
var jane = 95; 
var peter = 56; 
var jhon = 40;

if (my >= 80 ){
    console.log("MY grade is A")
} if (my >= 60 && my <= 79) {
    console.log("MY grade is B")  
} if (my >= 50 && my <= 49) {
    console.log("MY grade is C")
} if (my >= 40 && my <= 39) {
    console.log("MY grade is D")
} if (my <=39) {
    console.log("MY grade is F")
}

if (tom >= 80 ){
    console.log("tom grade is A")
} if (tom >= 60 && tom <= 79) {
    console.log("tom grade is B")  
} if (tom >= 50 && tom <= 49) {
    console.log("tom grade is C")
} if (tom >= 40 && tom <= 39) {
    console.log("tom grade is D")
} if (tom <=39) {
    console.log("tom grade is F")
}

if (jane >= 80 ){
    console.log("jane grade is A")
} if (jane >= 60 && jane <= 79) {
    console.log("jane grade is B")  
} if (jane >= 50 && tom <= 49) {
    console.log("jane grade is C")
} if (jane >= 40 && jane <= 39) {
    console.log("jane grade is D")
} if (jane <=39) {
    console.log("jane grade is F")
}

if (peter >= 80 ){
    console.log("peter grade is A")
} if (peter >= 60 && peter <= 79) {
    console.log("peter grade is B")  
} if (peter >= 50 && peter <= 49) {
    console.log("peter grade is C")
} if (peter >= 40) {
    console.log("peter grade is D")
} if (peter <=39) {
    console.log("peter grade is F")
}

if (jhon >= 80 ){
    console.log("jhon grade is A")
} if (jhon >= 60 && jhon <= 79) {
    console.log("jhon grade is B")  
} if (jhon >= 50 && jhon <= 49) {
    console.log("jhon grade is C")
} if (jhon >= 40) {
    console.log("jhon grade is D")
} if (jhon <=39) {
    console.log("jhon grade is F")
}
console.log("problem 2 completed");

// problem 3
// qst 1
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 >= 50){
    console.log("the largest number is", num1)
} else if ( num2 >= 50 ){
    console.log("the largest number is", num2)
} else if ( num3 >= 50){
    console.log("the largest number is", num3)
}
// qst 2
var a = 9;
var b = 8;
var c = 9;

if (a === b || b === c || a === c){
    console.log("Yes, this is a Isoscale triangle")
} else {
    console.log("No, this is not a Isoscale triangle")
}
console.log("problem 3 completed")

