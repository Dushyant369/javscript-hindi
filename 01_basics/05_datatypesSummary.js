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
  console.log("hello world")
}

console.log(typeof myFunction)