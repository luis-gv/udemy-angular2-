import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Jose Luis";
  nombre2:string = "JosE lUIs gonzáleZ Villalba";
  arreglo = [10,20,30,40,50,60,70,80,90,100];
  title = 'app works!';
  PI = Math.PI;
  a = 0.234;
  salario = 1234.45;
  heroe = {
    nombre: "Logan",
    clave:"Wolverine",
    edad: 500,
    direccion:{
      calle: "Av principal",
      casa: "19"
    }
  };
  fecha = new Date();

valorDePromesa = new Promise( (resolve,reject) => {

  setTimeout( ()=>resolve('Llego la data'), 1000);
})

}
