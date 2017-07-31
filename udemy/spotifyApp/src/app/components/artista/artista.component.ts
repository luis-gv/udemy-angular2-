import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any;

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(parametros => parametros['id'])
    .subscribe( id=>{
      // console.log(id);
      this._spotifyService.getArtista(id).subscribe(data => this.artista=data );

      this._spotifyService.getTopTracks(id).subscribe(data => this.pistas=data );
    });
  }



}
