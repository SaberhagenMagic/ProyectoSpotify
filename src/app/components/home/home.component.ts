import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    newSoungs: any[] = [];
    loading: boolean;
    error = false;
    msgError: string;

    constructor(public _spotify: SpotifyService) {
        this.loading = true;

        this._spotify.getNewRealeases()
            .subscribe( (data: any) => {
              console.log(data);
              // this.newSoungs = data.albums.items;
              this.newSoungs = data;
              this.loading = false;
            }, ( _error ) => {
              this.error = true;
              this.loading = false;
              this.msgError = _error.error.error.message;
              console.log(_error);
            });
    }

    ngOnInit() {
    }

}
