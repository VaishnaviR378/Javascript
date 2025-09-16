
// to find leap year using if else statement//
let year=2024;
if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) 
    // Year should be divisible by 4 and not divisible by 100 or divisible by 400
{
console.log(year + " is a leap year")
}
else{
    console.log(year + " is not a leap year")
}

// to find odd or even
let number=7;
if (number % 2 ===0)
{
    console.log(number + " even number")
}
else{
    console.log(number + " is odd number")
}
