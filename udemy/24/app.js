// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
var resultadoDoble2 = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble2(6, 3));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene " + arma + " y tiene el poder de " + poder;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    console.log(mensaje);
}
;
getAvenger("Arrow");
getAvenger("Thor", "martillo");
getAvenger("Cap", "escudo", "super fuerza");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = (function () {
    function Rectangulo(base, altura) {
        this.base = 0;
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calculaArea = function () {
        console.log(this.base * this.altura);
    };
    ;
    return Rectangulo;
}());
var rectangulo = new Rectangulo(5, 4);
rectangulo.calculaArea();
