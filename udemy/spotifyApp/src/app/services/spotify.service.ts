import { Injectable } from '@angular/core';
import{ Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable()
export class SpotifyService {
  artistas:any = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "BQBRRP_NUzZtcOGmzVEd501vnnGikO71fPiy_XW4L0Xrj938Zecse-SFYTmwG6jP20YvbC6r98sMUpMK6IcthQ  ";

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('authorization',`Bearer ${this.token}`)
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
            .map(res =>{
              this.artistas = res.json().artists.items;
              console.log(res.json().artists.items);
              // return res.json().artists.items;
            });
  }

  getArtista(id:string){
    let headers = new Headers();
    headers.append('authorization',`Bearer ${this.token}`)
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
            .map(res =>{
              // this.artistas = res.json().artists.items;
              console.log(res.json());
              return res.json();
            });
  }

  getTopTracks(id:string){
    let headers = new Headers();
    headers.append('authorization',`Bearer ${this.token}`)
    let query = `/${ id }/top-tracks?country=MX`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
            .map(res =>{
              // this.artistas = res.json().artists.items;
              console.log(res.json());
              return res.json().tracks;
            });
  }




}
