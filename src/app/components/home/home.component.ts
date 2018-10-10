import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    newSoungs: any[] = [];

    constructor(public _spotify: SpotifyService) {
        this._spotify.getNewRealeases()
            .subscribe( (data: any) => {
              console.log(data.albums.items);
              this.newSoungs = data.albums.items;
            });
    }

    ngOnInit() {
    }

}
