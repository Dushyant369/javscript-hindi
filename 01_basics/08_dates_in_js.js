//dates 

let myDate = new Date()
//console.log(myDate.toString());    Thu Sep 05 2024 16:49:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  Thu Sep 05 2024
//console.log(myDate.toISOString()); 2024-09-05T11:22:26.083Z
//console.log(myDate.toJSON); [Function: toJSON]


//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
newDate.toLocaleDateString('default',{
  weekday:"long"
})