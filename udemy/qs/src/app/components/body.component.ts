import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'body-component',
  templateUrl: 'body.component.html',
})

export class BodyComponent {
 texto:string = "Un gran poder requiere una gran responsabilidad";
 public autor:string = "Ben Parker";
 mostrar:boolean = false;
 personajes:string[] = ["Apider-man","Ant-man","hulk"]
}
