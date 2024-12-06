
if (true) {
  let  a = 10 
const b = 20
var c = 30
//console.log("inner: ",a);  //block scope

}

let a = 300

// console.log(a);//global scope
// console.log(b);
// console.log(c);


function one (){
  const username = " hitesh"
  function two(){
    const website = " youtube"
    console.log(username);
  }
  //console.log(website);
  
  two()
}

//one()

if (true) {
  const username = "dushyant"
  if (username === "dushyant"){
    const website = " youtube"
   // console.log(username + website);
    
  }
    // console.log(website);
    
}

// console.log(username);


//++++++++++++++++++interesting+++++++++++++++++


console.log(addone(5))
function addone(num){
  return num + 1 ;
}

// addone(5)

const addTwo = function(num) {
  return num + 2 ;
}

addTwo(5)