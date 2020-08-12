// const abc = (arg1, arg2)=>{

//     console.log('arguments');
// }

//'use strict';

 name="Saddle";

function importantPerson(){
     return this.name;
}

const obj1 = {
     name:"Aji",
     importantPerson:importantPerson
}
const obj2 = {
     name:"Bindu",
     importantPerson:importantPerson
}
console.log(importantPerson());
// console.log("first object " + obj1.importantPerson());
// console.log("Second object " + obj2.importantPerson());

if (window.scrollX===0){
     alert("scrolled to the top");
}

