/*১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।*/
function ml_table(){
    for (var i = 1; i <= 10; i++){
        var result = i * 13;
        console.log(`${13} * ${i} = ${result}`);
    }
}
// ml_table();
/*২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।*/
function uc_lc(name){
    console.log(name.toLowerCase());
}
// uc_lc('Hi');

/*৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। 
আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। */
function Name(Fname, Lname){
    console.log(Fname +' '+ Lname)
}
// Name('abu', 'abdullah');

/*৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।*/
function add(num){
    console.log('Given number is ', num);
    var square = num ** 2;
    return square;
}
// var total = add(3);
// console.log('square: ', total);

/*৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা*/

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2 
}
console.log(Object.values(pizza))