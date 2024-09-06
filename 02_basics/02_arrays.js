const mcu_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//mcu_heroes.push(dc_heroes)
//console.log(mcu_heroes);


// const amalgam_heroes = mcu_heroes.concat(dc_heroes)
// console.log(amalgam_heroes);


const new_amalgam  = [...mcu_heroes,...dc_heroes]
//console.log(new_amalgam);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("dushyant"));
console.log(Array.from("dushyant"));
console.log(Array.from({name:"dushyant"}));  //interesting for interviews


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))