import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Jose Luis";
  arreglo = [10,20,30,40,50,60,70,80,90,100];
  title = 'app works!';
  PI = Math.PI;
  a = 0.234;
  salario = 1234.45;
}
