// function miletokm(miles){
//     const Kilometer = miles*1.609;
//     return Kilometer; 
// }
// const input = 11;
// // const output = miletokm(input);
// // console.log(output.toFixed(2));

// function getsumnumofarray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const elements = numbers[i];
//         sum = sum + elements;
//     }
//     return sum;
// }

// function getoddevennumofarray(numbers){
//     const oddnumbers = [];
//     for(let i = 0; i<numbers.length; i++){
//         const elements =numbers[i];
//          if(elements % 2 == 1){
//             console.log( elements);
//             oddnumbers.push(elements)
//         }
//     }
//     return oddnumbers;
// }
// const array = [60, 66, 56, 93, 77, 62, 27, 34];
// const output = getoddevennumofarray(array);
// console.log(output)
// const oddnumberssum = getsumnumofarray(output);
// console.log('total sum
//  is', oddnumberssum);

/*fractol*/
// function getfractol(number){
//     let fractol = 1;
//     for(let i = 1; i <=number; i++){
//         fractol = fractol * i;
//     }
//     return fractol;
// }
// const input = 8 ;
// const Fractol = getfractol(input);
// console.log('fractol of', input, 'is', Fractol)

/*problem 1*/
// function HourToMinutes(hour){
//     const minutes = hour * 60;
//     return minutes;
// }
// const inputtime = 6;
// const minutes = HourToMinutes(inputtime);
// console.log(minutes, 'minutes')

/*problem 2*/
function findLeapyear(years){
    const leapyears = [];
    for(let i = 0; i < years.length; i++){
        const elements = years[i];
         if(elements % 4 == 0){
            console.log( elements);
            leapyears.push(elements)
        }
    }
    return leapyears;
}
const years = [2023, 2024, 2025, 2028, 2030];
const output = findLeapyear(years);
console.log(output)