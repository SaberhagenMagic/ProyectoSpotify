import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitaizer: DomSanitizer) {}

  transform(value: any, url: string): any {

    return this.domSanitaizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
