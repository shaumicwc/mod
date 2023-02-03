// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে,৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , 
// ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
// var budget = 50000;

// if(budget >= 80000 ){
//     console.log("I wil by mac")
// } else if(budget >= 60000){
//     console.log("I wil by gaming laptop")
// } else if(budget >= 40000){
//     console.log("I will by Lenovo Yoga computer")
// } else if(budget >= 20000){
//     console.log("I will by second hand laptop")
// } else {
//     console.log("I will use my mobile")
// }

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
// for(output = 1; output < 40; output++){
//     console.log("আসকে আমার মন ভালো নেই")
//     console.log(output)
// }

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// for(i = 58; i <= 98; i++){
//     console.log(i)
// }

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
// for(i = 412; i <= 456; i+=2){
//     console.log(i)
// }

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for(i = 581; i <= 623; i+=2){
//     console.log(i)
// }

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
// var Output = ["string", "number", "boolean", "null", "array", "while loop","for loop","variable", "condition", "index"]
// for(i = 0; i < Output.length; i++){
//     var OUtput = Output[i];
//     console.log(OUtput)
// }

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই 
// array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
// var Output = ["nokia", "itel", "samsung", "meizu", "huawei"]
// var i = 0;
// while(i < Output.length){
//     var OUtput = Output[i];
//     console.log(OUtput);
//     i++;
// }

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// for(i = 30; i <= 86; i++){
//     if(i >= 44){
//         break;
//     }
//     console.log(i)
// }

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। 
// অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
// var bookprice = [66, 300, 199, 178, 198, 265, 163, 136, 201, 206, 34, 200]
// for(i = 0; i < bookprice.length; i++){
//     var overprice = bookprice[i];
//     if ( overprice > 200){
//         continue;
//     }
//     console.log(overprice)
// }