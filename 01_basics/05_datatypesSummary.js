// Primitive 

// 7 types : String , number , boolean ,null  , undefined
// Symbol , BigInt


const Id = Symbol('123')
const anotherId = Symbol('123')
 
//sconsole.log(Id===anotherId);

const bigNumber = 646665664649488451616n


//reference type (non primitive)

//arrays , objects , functions 

const heroes = ["shaktiman","naagraj","doga"]
let myObj =  {
  name : "dushyant" , 
  age : 22  ,
}


const myFunction  = function() {
  console.log("hello world");
}

//console.log(typeof myFunction)

//******************************************************** */

// stack (primitive) , heap(non-primitive)

let myYoutubename = "icyberserker";
let anotherNAme = myYoutubename;
anotherNAme = "chai aur code";
console.log(anotherNAme);

let userOne = {
email : "user@google.com" ,
upi :"user@ybl"

}

let userTwo = userOne

userTwo.email = "dushyant@google.com"

console.log(userOne.email)
console.log(userTwo.email)