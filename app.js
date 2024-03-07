/* -------------------1-masala--------------------------*/
/*
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
].map((item) => {
  if (item.percent >= 85) {
    return { ...item, grade: 5 };
  } else if (item.percent <= 84 && item.percent >= 70) {
    return { ...item, grade: 4 };
  } else if (item.percent < 70 && item.percent >= 60) {
    return { ...item, grade: 3 };
  } else {
    return { ...item, grade: 2 };
  }
});

// console.log(students)

function getNamesByGrade(student, grade) {
  return students
    .filter((student) => {
      return student.grade === grade;
    })
    .map((student) => {
      return student.name;
    });
}

const result = getNamesByGrade(students, 5);
console.log(result);*/

/* -------------------5-masala--------------------------*/

// const text = "George Raymond Richard Martin"
//   .split(" ")
//   .map((word) => {
//     return word.charAt();
//   })
//   .join("");
// console.log(text);

/* -------------------6-masala--------------------------*/

// const ages = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ].sort((a, b) => a.age - b.age);
// // console.log(ages);
// console.log(ages.at(-1).age - ages.at().age);

/* -------------------7-masala--------------------------*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const juftNumber = numbers.filter((num) => {
//   return num % 2 == 0;
// });
// const toqNumber = numbers.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(`toq:${toqNumber};juft:${juftNumber}`);

/* -------------------9-masala--------------------------*/
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];
// const sortedPrice= products.sort((a,b)=> a.price-b.price)
// console.log(sortedPrice)

/* -------------------10-masala--------------------------*/

// const sortedRating=products.sort((a,b)=>a.rating-b.rating)
// console.log(sortedRating.at(-1))

/* -------------------11-masala--------------------------*/

// const sortedPrice= products.sort((a,b)=> b.price-a.price)
// console.log(sortedPrice.at(-1))

/* -------------------13-masala--------------------------*/
// const productName=products.map((prod)=> prod.name)
// console.log(productName)

/* -------------------14-masala--------------------------*/
// const prodId=products.find((prod)=> prod.id==5).name
// console.log(prodId)
/* -------------------15-masala--------------------------*/
// const filteredprod = products.filter((prod) => {
//   return prod.id !== 4;
// });
// console.log(filteredprod);

/* -------------------16-masala--------------------------*/

// const text1='jfbjwefbjshfbjdhw1'.split("").every((letter)=>{return !Number(letter)})
// console.log(text1)

/* -------------------17-masala--------------------------*/
// const values =[false,1,10,"",null,'abdulaziz',1.13,0]

// function getTruthyFalsy(val) {return {truthy:val.filter((item)=>item),falsey:val.filter((item)=>!item)}}

// const result=getTruthyFalsy(values)
// console.log(result)

/* -------------------18-masala--------------------------*/

// const text = "Men Abdulaziz Programmerman"
//   .split(" ")
//   .map((word) => word.length);
// console.log(text);

/* -------------------19-masala--------------------------*/
// const text = "Men Abdulaziz Programmerman".split().some((word)=>" ")
// console.log(text);




