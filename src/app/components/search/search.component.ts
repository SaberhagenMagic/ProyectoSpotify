import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino = '';

  constructor(public _spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscaArtista() {

    if (this.termino.length !== 0) {

      this._spotify.getArtistas( this.termino ).subscribe( artistas => {
        console.log(artistas);
      });

    }

  }

}
