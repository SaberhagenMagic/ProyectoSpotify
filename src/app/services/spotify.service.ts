import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotifyAPI = 'https://api.spotify.com/v1/';

  token = 'BQB8CPhN_yzKEOHU0JzExgRHLTgpHlFYBBNAHmgfIpAbPd8Tg35kmuWf_o4JkloBS9L4CJjCy85lTx83-j4';

  constructor(public http: HttpClient) {
    console.log('Servicio listo');
   }

   private getHeaders(): HttpHeaders {
    const spotiHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return spotiHeaders;
   }

   getTop( id: string ) {
     const url = `${ this.urlSpotifyAPI }artists/${ id }/top-tracks?country=MX`;

     const _head = this.getHeaders();

     return this.http.get(url, { headers: _head });
   }

   getArtista( id: string) {
    const url = `${ this.urlSpotifyAPI }artists/${ id }`;

    const _head = this.getHeaders();

    return this.http.get(url, { headers: _head });
    //  .map( (resp: any) => {
    //      this.artistas = resp.artists.items;
    //      return this.artistas;
    //  });

   }

   getArtistas(termino: string) {
     const url = `${ this.urlSpotifyAPI }search?query=${ termino }&type=artist&offset=0&limit=20`;

     const _head = this.getHeaders();

     return this.http.get(url, { headers: _head })
      .map( (resp: any) => {
          this.artistas = resp.artists.items;
          return this.artistas;
      });

   }
}
