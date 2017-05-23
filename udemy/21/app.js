var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var avenger = new Avenger("Winter Solder", "Cap", "Bucky");
console.log(avenger);
