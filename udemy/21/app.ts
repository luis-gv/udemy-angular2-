class Avenger {
  nombre:string="Sin nombre";
  equipo:string;
  nombreReal:string;

  puedePelear:boolean=false;
  peleasGanadas:number=0;

  constructor(nombre:string, equipo:string, nombreReal:string){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombreReal=nombreReal;
  }

}

let avenger = new Avenger("Winter Solder","Cap","Bucky");

console.log(avenger);
