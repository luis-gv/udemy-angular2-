import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html'
})
export class ResultadoBusquedaComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private activatedRoute:ActivatedRoute, private heroeService:HeroesService ) {
      this.activatedRoute.params.subscribe(params => {
        this.heroes = this.heroeService.buscarHeroes(params['termino']);
      })
  }

  ngOnInit() {
  }

}
