var name = "Salvador Dueñas";
console.log(name.length); // Medir la longitudd
var age =30;
var convage = age.toString(age);
console.log(typeof(convage));

var person = {
    name2:"salvador",
    edad:13,
    miNombre: function(){
        return this.name2;
    },
    gustos: {
        movies:{
          uno: "hulk",
          dos:"deadpool",
          tres:"xmen"
            

        },
        book: 'Aprendiendo Js'
    }

};
person.name2 = "Carlos";
person.address= "Chiapas 209";
delete person.address;
console.log(person.name2,person.edad); 
var objetoName = person.name2
console.log("Nombre del onjeto  "+objetoName);
console.log(person.miNombre());
console.log("Direccion "+person.address);
console.log("Segunda Pelicula "+person.gustos.movies.dos);

// Saber si tiene esta propiedad
console.log("Tienes esta propiedad",person.hasOwnProperty('edad'));
