import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistName = '';
  trackName = '';

  constructor(public _spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscaArtista() {
    if (this.artistName.length !== 0) {
      this._spotify.getSearchResult( this.artistName, 'artist' ).subscribe();
      // .subscribe( artistas => { console.log(artistas); });
    }
  }

  buscaTrack() {
    if (this.trackName.length !== 0) {
      this._spotify.getSearchResult( this.trackName, 'track' ).subscribe();
      // .subscribe( items => { console.log(items); });
    }
  }

}
