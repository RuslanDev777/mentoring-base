import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearNumberPipe',
  standalone: true,
})
export class ClearNumberPipe implements PipeTransform {
  transform(text: string) {
    return text.replace(/-/g, '');
  }
}
