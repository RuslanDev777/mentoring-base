import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tittleTransformPipe',
  standalone: true,
})
export class TittleTransformPipe implements PipeTransform {
  transform(text: string) {
    if (text.length > 20) {
      return text.substring(0, 20).trim() + '...';
    } else {
      return text;
    }
  }
}
