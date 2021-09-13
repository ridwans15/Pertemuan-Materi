// //membuat objek

// let person ={
//     name: "john",
//     age: 18,
//     isVaccinated : true,
//     pet:{
//         kucing:"cat",
//         anjing:"dog",
//     }
// }

// person.pet.hamster="cheta"

// // console.log(person);
// console.log(person.pet);
// // console.log(person.pet.kucing);

// delete person.pet.kucing
// console.log(person.pet);

// const greeting={
//     welcome : function () {
//         return'welcome to sic'
//     },
//     bithday : function () {
//         alert('selmaat ultaah')
//     }
// }
// console.log(greeting.bithday());

// const car={
//     color:"red",
//     gasoline :"pertamax",
//     wheel : 4,
//     startEngine: function () {
//         return"engine started"
//     },
//     brake : function(){
//         return"ban di rem"
//     }
// }

// console.log(car.brake());

// const kelinci={
//     nama:'Kelinci',
//     Kaki: 2,
//     Warna :["Abu","Putih","Coklat"],
//     Spesies:"Leporidae",
//     Makanan :["Wortel","Sawi","Sayuran"],
//     keahlian: ()=>{
//         return"meloncat"
//     }
// }

// console.log(kelinci);

// ARRAY

// let bidangIt=[
//     "Front End Developer",
//     "Back End Developer",
//     "Full Stack Engineer",
//     "Android Developer",
//     "Data Scientist"
// ];
// bidangIt.length
// bidangIt.forEach(element =>{
// console.log(element);
// });

let number= [3,5,7,9,11] 
let doubleMap=number.map((number)=>{
 return number*5
})

console.log(doubleMap)

