// function
function item(Price){
    console.log('Captain Price');
    console.log(Price);
}
// item(150);

// return
function add(num){
    console.log(num);
    var square = num ** 2;
    return square;
}
// var total = add(3);
// console.log('square: ', total);

// object
var cart = {
    mouse: 22,
    tea: 9,
    keyboard: 2,
    monitor: 1,
    pc: 1
}
// console.log(mobile);
// console.log(mobile.brand);
// mobile.brand = 'samsung';
// console.log(mobile);
var keys = Object.keys(cart);
// console.log(keys);
var values = Object.values(cart)
// console.log(values);

// object looping
for(i = 0; i < keys.length; i++){
    var propertyname = keys[i];
    var propertyvalues = cart[propertyname];
    // console.log(propertyname, propertyvalues)
}

// switch i alternative of if-else logic

