// problem 
// qst 1
function foo(){
    console.log('foo')
    bar();
}
function bar(){
    console.log('bar')
}
// foo();

// qst 2
function make_avg(a, b, c){
    var sum = a + b + c;
    var avarage = sum / 3;
    return avarage;
}
var a = 40;
var b = 56;
var c = 97;
// var myavarage = make_avg(a, b, c);
// console.log("avarage mark is: ", myavarage)

// qst 3
function make_avg(){
    var array = [27, 23, 36, 37, 32];
    var sum = 0;
    for (var number of array){
        sum += number;
    }
    var  avarage = sum / array.length;
    return avarage;
}
var avarageis = make_avg();
console.log(avarageis)

// qst 4
// using return + parameter
function odd_even(oddeven){    
    if (oddeven % 2 == 0){
        return "The number is even";
    } else{
        return "The number is odd";
    }
}
// odd_even(3);

//  using parameter
function odd_even(oddeven){    
    if (oddeven % 2 == 0){
        console.log("The number is even")
    } else{
        console.log('The number is odd')
    }
}
// odd_even();

// qst 5
/*using if-else*/
// var signal = '';
// if(signal == 'red'){
//     console.log("Don't cross")
// } else if(signal == 'yellow'){
//     console.log("You shouldn't cross")
// } else if( signal == 'green'){
//     console.log('You are good to go')
// } else {
//     console.log("Go fuck yourself")
// }
// /*using switch*/
// switch(signal){
//     case 'green':
//         console.log('You are good to go')
//         break;
//     case 'yellow':
//         console.log("You shouldn't cross")
//         break;
//     case 'red':
//         console.log("Don't cross")
//         break;
//     default:
//         console.log("Go fuck yourself")
// }

