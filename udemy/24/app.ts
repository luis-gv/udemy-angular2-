
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE:{nombre:string, edad:number}={
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto

interface Superheroe{
  nombre:string,
  artesMarciales:string[]
}

var batman:Superheroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
let resultadoDoble2 = (a:number,b:number)=>(a+b)*2;
console.log(resultadoDoble2(6,3));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, arma:string="arco",poder?:string ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene " + arma + " y tiene el poder de " + poder ;
  }else{
     mensaje = nombre + " tiene un " + arma
  }
  console.log(mensaje);
};
getAvenger("Arrow");
getAvenger("Thor","martillo")
getAvenger("Cap","escudo","super fuerza");


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
  base:number=0;
  altura:number;

  constructor(base:number,altura:number){
    this.base = base;
    this.altura=altura;
  }

  calculaArea(){
    console.log(this.base*this.altura);
  };
}

let rectangulo = new Rectangulo(5,4);
rectangulo.calculaArea();
