function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const eliment = numbers[index];
        sum = sum + eliment;
        // console.log(index, eliment, sum);

    }
    return sum

}

function oddNumbers(numbers) {
    const oddNumbersArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbersArray.push(element);
        }


    }
    return oddNumbersArray
}


const myNymbers = [20, 22, 26, 37, 43, 57, 90];
const oddNumbersArray = oddNumbers(myNymbers);
console.log(oddNumbersArray);
const sum = getSumOfAnArray(oddNumbersArray);
console.log(sum);
