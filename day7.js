/*১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে */
function celciustofarenhite(temp){
    // console.log("Input temparature is", temp)
    let Farenhite = temp * 32;
    // console.log("Output temparature is", Farenhite)
}
// celciustofarenhite(13);

/*২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। */
function Farenhitetocelcius(temp){
    // console.log("Input temparature is", temp)
    let celcius = temp / 32;
    // console.log("Output temparature is", celcius)
}
// Farenhitetocelcius(416);

/*৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। */
function getgrade(numbers){
    // console.log("Your number is", numbers)
    if (numbers <=100 && numbers >=80){
        console.log("Your grade is A+")
    } else if (numbers <=79 && numbers >=70) {
        console.log("Your grade is A")  
    } else if (numbers <=69 && numbers >=60) {
        console.log("Your grade is B")
    } else if (numbers <=59 && numbers >= 50) {
        console.log("Your grade is C")
    } else if (numbers <=49 && numbers >= 40) {
        console.log("Your grade is D")
    } else if(numbers <=39 && numbers >=0){
        console.log("Your grade is F")
    } else{
        console.log("please enter number 0 to 100")
    }
}
const givennumber = 10;
// getgrade(givennumber);

/*৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। 
জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। */
/*simple interest*/
function interestcalculator(principal, rate, time){
    let interest = principal * rate * time;
    console.log("Total intarest is", interest);
}
const principal = 100;
const rate = 0.05;
const time = 3;
// interestcalculator(principal, rate, time);

/*compound interest*/
function compoundinterest(principal, rate, time, timeinterest){
    console.log("principal balance is", principal)
    let a = (rate / timeinterest) + 1;
    let b = a ** (time * timeinterest);
    let principalplusinterest = b * principal;
    let interest = principalplusinterest - principal;
    console.log("Principal balance plus Interest is", principalplusinterest.toFixed(2))
    console.log("Total interest is", interest.toFixed(2))

}
let Principal = 10000;
let Rate = 0.03875;
let Time = 7.5;
let timeinterest = 12;
// compoundinterest(Principal, Rate, Time, timeinterest);


