// number 1//

function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
}

foo();

// number 2//


function make_avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let average = make_avg(3, 5, 7);
console.log(average);


// number 4//


// *********Return 


function odd_even(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// *********no return

function odd_even(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

odd_even(3);



// number 5///


let signal = "green";

if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Be cautious and slow down");
} else if (signal === "green") {
    console.log("Go ahead and cross the road");
} else {
    console.log("Invalid signal color");
}