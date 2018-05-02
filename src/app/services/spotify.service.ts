import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio listo');
   }

   getArtistas(termino: string) {
     let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

     let spotiHeaders = new HttpHeaders({
       'Authorization': 'Bearer BQBGT63fOClYAje5Uhw4cG5MZ0ozVJHKcswJv3A2y5PuLBOoKDPypH21FoxW33IM2bnZR9oWbfmXQkfns2s'
     });

     return this.http.get(url, { headers: spotiHeaders })
      .map( (resp: any) => {
          this.artistas = resp.artists.items;
          return this.artistas;
      });

   }
}
