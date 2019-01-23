var edad =30;
edad ++;
console.log(edad) ;

var bajaedad =30;
bajaedad --;
console.log(bajaedad);

//Conversion
var cadena1= "01";
var cadena2="1.1";
var cadena3 ="zzz";

cadena1=+cadena1;
cadena2 = +cadena2;
console.log(cadena1);
console.log(cadena2);
cadena3=+cadena3;
console.log(cadena3);

//las variables puede adquiir mas de un valor asociado
var result = true && "hola mundo";
console.log(result);

//Nombre re completo addicion
var nombre = "Don Chilo";
var age = 22;
var nombre_completo = "Mi nombre "+nombre+"y mi edad es de "+age;
console.log(nombre_completo); 

//Sumar los vaores con comillas y sin cmillas
var valor1 = 10;
var valor2 = "10";
var sumarValores = valor1 +valor2;
var sumarValoresNegativo = valor1 - valor2;
console.log(sumarValores); // Print 1010
console.log(sumarValoresNegativo); // Print 0 


//Operadores Relacionales

var operador1 = 10 <20;
console.log(operador1);

var operador2 = 10 >20;
console.log(operador2);

var operador3 = 10 <= 10;
console.log(operador3)

var operador4 = 10 >=11;
console.log(operador4);


// si un valor es string y el otro es numero
//la comparasion sera basada en numwero

//comparasion basada en numero v
var result = "23" < 3; //false

// comparasion con solo string
var result = "23" < "3";  //true 


//Operadores de Igualacion == , != ,=== ,!==
console.log("Operadores de igualacion")
console.log("1" == 1); //true
console.log(1 !=1); // false
console.log(false ==0); //true
console.log(true ==1); // true
console.log('1' === 1 ); //false 
console.log('1' !==1 ); //true



//Operadores Ternarios
console.log("Operadores Ternarios");
var num1 = 100;
var num2 = 200;
var resulTernario =(num1 > num2) ? "Si es mas grande": "No estas equivocado";
var resultCorrect = (num1 < num2) ? "Si es mas grande " : "No  es mas chico";
console.log(resulTernario );
console.log(resultCorrect);

//Operadores de Asignacion
console.log("Operadores de asignacion");
console.log();

var asignacion= 10 ; //10
asignacion = asignacion + 10; // 10 + 10 = 20 
asignacion *= 10; // 20* 10  = 200
console.log(asignacion);

console.log("Valor de asignación "+asignacion);
// Condicion if
console.log("Condicion IF");
var ifValor = 100;
if (ifValor >50) {
    alert("El valor es mas grande que 50 con la cantidad de "+ifValor);
}
else if (ifValor == 100)  {
    alert("El valor es igual a 100");
}
else{
    alert("El valor es meno a 50");
}