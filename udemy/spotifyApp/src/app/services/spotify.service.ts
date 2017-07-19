import { Injectable } from '@angular/core';
import{ Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable()
export class SpotifyService {
  artistas:any = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('authosization','Bearer BQCeHp1vSP1gsU0nkoDwCsWyB2jNCEhW_Y1rdIUh5saUyl2z6erg7wCxwvC41N0D9XnQ7AX7B3DqtGPpv91Y6Q')
    let query = `q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
            .map(res =>{
              console.log(res)
            });
  }

}
