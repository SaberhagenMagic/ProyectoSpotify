import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  // https://developer.spotify.com/documentation/web-api/
  artistas: any[] = [];

  urlSpotifyAPI = 'https://api.spotify.com/v1/';

  token = 'BQCNiR0Sq5S5qTBvnVFleJe1XvaFMHu0vrv7lLsBPRenvKC-mZ9sRzeQYub79Tyg4cd2_SwZrC5nuI9NQB0';

  constructor(public http: HttpClient) {
    console.log('Spotify servicio listo');
   }

   private getHeaders(): HttpHeaders {
    const spotiHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return spotiHeaders;
   }

   getNewRealeases() {
     const url = `${this.urlSpotifyAPI}browse/new-releases`;
     const _head = this.getHeaders();

     return this.http.get(url, { headers: _head });
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
