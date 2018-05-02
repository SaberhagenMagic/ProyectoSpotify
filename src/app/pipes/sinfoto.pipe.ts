import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(urlImage: any[]): any {
    let noimage = 'assets/img/noimage.png';

    if (!urlImage) {
      return noimage;
    }

    return (urlImage.length > 0) ? urlImage[1].url : noimage;
  }

}
