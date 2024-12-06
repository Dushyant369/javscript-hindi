

function sayMyName(){
  console.log("D");
  console.log("u");
  console.log("s");
  console.log("h");
  console.log("y");
  console.log("a");
  console.log("n");
  console.log("t");
}

//sayMyName();

// function  addTwoNumbers(number1 , number2) {
//  console.log(number1+number2);
// }
function  addTwoNumbers(number1 , number2) {
  // let result = number1 + number2
  // return result 

  return number1+number2;
 }

const result = addTwoNumbers(3,5)
//console.log("result:" ,  result);

function loginUserMessage(Username="john doe") {
  if (!Username) {
    console.log("please enter a username");
    
  }
  return `${Username} just logged in`
}


// console.log(loginUserMessage("dushyant"));
// console.log(loginUserMessage());

function calculateCartPricce(...num1){
  return num1;
}
//console.log(calculateCartPricce(200,400,300))

const user  = { 
  username : "hitesh",
  price : 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

// handleObject({username: "john",
//   price : 599
// })

const myNewArray = [ 200 , 300 , 400 , 500 ,600]

function returnSecondValue(getArray){
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 100 , 400]));
