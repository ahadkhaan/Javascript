const myarray= [0,5,8,3]
// console.log(myarray[1])

// Array methods

// myarray.push(10) //add value in end
// myarray.push(9) //add value in end
// myarray.pop() // remove last value from array

// myarray.unshift(1) // add value at first in array
// myarray.shift() // remove value from the first in array
// console.log(myarray)

// console.log(myarray.includes(9)) find value and give ans in boolean
// console.log(myarray.indexOf(8))  find value and give ans withrespect to index


const newarray =myarray.join() //join make the array in string
// console.log(myarray)
// console.log(typeof newarray)


//Slice and splice
console.log("A " , myarray)

let narry1 = myarray.slice(1, 3)
console.log(narry1)
console.log("B " ,myarray)

let narr2= myarray.splice(1, 3)
console.log("C " ,myarray)
console.log(narr2)

