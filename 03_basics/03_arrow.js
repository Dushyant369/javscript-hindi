const user = {
username : "dushyant" ,
price : 999 ,
welcomeMessage : function () {
  console.log(`${this.username} ,  welcome to website `);
  console.log(this);
  
}

}

// user.welcomeMessage();
// user.username = "John"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//   let username = "dushyant"
// console.log(this.username);
// }

const chai = ()  => {
  let username  = " dushyant "
  console.log(this);
}

//chai()

// const addTwo = (num1 , num2) => {
//   return num1 + num2 }


const addTwo = (num1 , num2) =>  (num1 + num2) 

  console.log(addTwo(3,5));
  

