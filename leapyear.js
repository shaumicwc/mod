// function leapYear(Year) {
//     const reminder = Year % 4 ;
//     if (reminder === 0) {
//         console.log('your year is leap year',Year);
        
//     }
//     else{
//         console.log('your year is not a leap year', Year);
//     }
    
// }
// leapYear(2001)

function leapYear(Year) {
    const reminder = Year % 4 ;
    if (reminder === 0) {
        return true;
        
    }
    else{
        return false
    }
    
}

const isMyYearLeapYear = leapYear(2005);
console.log('my year', isMyYearLeapYear);
const isHerYearLeapYear = leapYear(2000);
console.log('her year', isHerYearLeapYear);