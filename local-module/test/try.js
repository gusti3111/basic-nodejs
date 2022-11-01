
function myName(nama) {
  return `nama saya ${nama}`;
};
// // arrow function
const hola = (nama) => {
  nama = 'joni'
  console.log(`hola este es mi primo ${nama}`);

};
// object
const person ={
  Name: "Node",
  Age : 14 ,
  Language: "Javascript",

  hallo() {
    return "Hi myName is " + this.Name +" I'm " + this.Age + " saya berbahasa " + this.Language;
  }
 
};
class Umur{
  constructor(){
    console.log("Umur saya 14 tahun")
  }
}
// first method to  export modules
// module.exports.myName = myName;
// module.exports.hola = hola;
// module.exports.person = person;
// module.exports.Umur = Umur;


// Second Method to Export Modules
// module.exports =
// {
//   myName : myName,
//   hola :hola,
//   person: person,
//   Umur : Umur,
// }

// 3
module.exports = {myName,hola,person,Umur}
