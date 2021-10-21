// 01 push sans push
let fruits = ['Apple','Orange','Banana'];
fruits = [...fruits,"Raspberry"]
console.log(fruits);

// 02 unshift sans unshift
fruits = ['Apple','Orange','Banana'],
fruits = ["Raspberry",...fruits]
console.log(fruits);

// 03 Array concatenation
const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
let Array = [...arr1,...arr2]
console.log(Array);


// 03 Objets
const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }
  const bobby = {
    firstName: "bobby",
    ...user
  }
  console.log(bobby);

  // 5 - forEach
  const numbers = [1, 2, 3, 4, 5, 6]
  let showNumbers = numbers.forEach(number => {
    console.log(number);
  })

  // 6 - filter
  const oddNumbers = numbers.filter(number => {
      return number%2 != 0
  })
  console.log(oddNumbers);

  // 07 - map 
const squareNumbers = numbers.map(number => {
    return number * number
}) 
console.log(squareNumbers);


  