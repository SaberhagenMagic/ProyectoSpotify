import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};

  topTen: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) {
      let id;

      this.activatedRoute.params.subscribe( params => id = params['id'] );
      this._spotify.getArtista( id ).subscribe( artista => {
          // console.log( artista );
          this.artista = artista;
      });
      this._spotify.getTop( id ).subscribe( (topTrack: any) => {
        console.log(topTrack);
        this.topTen = topTrack.tracks;
      });
  }

}
