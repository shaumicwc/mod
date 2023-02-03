// while loop
var number = 1;
while(number <= 10 ){
    console.log(number);
    number = number + 2;
}

// for loop
// for(var i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// array loop
// var numbers = [10, 20, 30, 40, 50, 60, 70]
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number)
// }

// break
for(var i = 0; i <= 10; i++){
    if(i > 6){
        break;
    }
    console.log(i);
}