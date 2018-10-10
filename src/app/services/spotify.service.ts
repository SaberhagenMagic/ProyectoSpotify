import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  // https://developer.spotify.com/documentation/web-api/
  searchResult: any[] = [];

  urlSpotifyAPI = 'https://api.spotify.com/v1/';

  token = 'BQA-xooG0p2U-JVgsPf_ASxMYg1pIRbF8wGjdBwFF6UmlFBIZnRwwFhUzX4RTAGnHtyVl1TBX1qK7p0Belo';

  constructor(public http: HttpClient) {
    console.log('Spotify servicio listo');
   }

   private getHeaders(): HttpHeaders {
    const spotiHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return spotiHeaders;
   }

   getSpotiQuery(query: string) {
      const _head = this.getHeaders();
      return this.http.get(`${ this.urlSpotifyAPI }${ query }`, { headers: _head });
   }

   getNewRealeases() {
     return this.getSpotiQuery('browse/new-releases')
        .pipe( map( (data: any) => data.albums.items ));
   }

   getTop( id: string ) {
     return this.getSpotiQuery(`artists/${ id }/top-tracks?country=MX`);
   }

   getArtista( id: string) {
      return this.getSpotiQuery(`artists/${ id }`);
      //  .map( (resp: any) => {
      //      this.artistas = resp.artists.items;
      //      return this.artistas;
      //  });

   }

   getSearchResult(termino: string, type: string, limit?: number) {
     return this.getSpotiQuery(`search?query=${ termino }&type=${ type }&offset=0&limit=${ (limit !== undefined) ? limit : 20 }`)
      .pipe( map( (resp: any) => {
          // console.log(resp);
          if (type === 'artist') {
            this.searchResult = resp.artists.items;
          } else if (type === 'track') {
            this.searchResult = resp.tracks.items;
          }

          return this.searchResult;
      }));

   }

}
