let sum = 0;

// for (let i = 0; i <7 ; i++) {
//     sum = sum + i ;
//     console.log(i, sum);
    
// }

function sumOfNumbers(numbers) {
    let sum = 0; {
        for (let i = 0; i <= numbers; i++){
           sum = sum + i ;
           console.log(i, sum);
            
      }
    }    
    return sum;
}

const sumOf = sumOfNumbers(7, 9, 8);
