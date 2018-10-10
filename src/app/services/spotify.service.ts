import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  // https://developer.spotify.com/documentation/web-api/
  searchResult: any[] = [];

  urlSpotifyAPI = 'https://api.spotify.com/v1/';

  token = 'BQBhJwr27LA_4qlqCSIullIgCWSCdBCPROtIdXbNds_p85APgwA9pLABwqwvL9PzqxD3ZWODoTwMTCRnJwI';

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

   getSearchResult(termino: string, type: string, limit?: number) {
     const url = `${ this.urlSpotifyAPI }search?query=${ termino }&type=${ type }&offset=0&limit=${ (limit !== undefined) ? limit : 20 }`;

     const _head = this.getHeaders();

     return this.http.get(url, { headers: _head })
      .map( (resp: any) => {
          // console.log(resp);
          if (type === 'artist') {
            this.searchResult = resp.artists.items;
          } else if (type === 'track') {
            this.searchResult = resp.tracks.items;
          }

          return this.searchResult;
      });

   }

}
