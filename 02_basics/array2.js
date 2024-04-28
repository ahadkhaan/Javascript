const marvel_heros =["Superman","Spiderman","Ironman"]
const dc_heros =["Batman","Flash","Batman"]

// merging the arrays

// push 
// marvel_heros.push(dc_heros) // push method imagine the second array as an element
// console.log(marvel_heros[3][1])

// concat 
//in concat we have to declare a new var and assign all the values to it
// let all_heros =marvel_heros.concat(dc_heros)
// console.log(all_heros)

//spread 
// spread also concat all the elements in array and it is the best method to use 
// let all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros)

//flat
//when there is situation in which their is many arrays inside an array and we have to convert it into single array we use flat
// const mix_array =[1,2,3,[4,5],6,[7,8,[9,7]]]
// console.log(mix_array.flat(Infinity))

//Array.from
//when we recieve data an it can be in any datatype and we have to chnage it to an array we use from

// console.log(Array.isArray("AhadShah")) //Array.isArray check that its is array or not

// console.log(Array.from("AhadShah"))// change string to array form
// console.log(Array.from({name:"Ahad"}))// intersting case bcz 

let score1=200
let score2 =300
let score3=100

console.log(Array.of(score1,score2,score3)) //change these multiple var in to single array