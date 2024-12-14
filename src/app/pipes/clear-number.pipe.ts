import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearNumberPipe',
  standalone: true,
})
export class ClearNumberPipe implements PipeTransform {
  transform(text: string | null | undefined) {
    return text?.replace(/-/g, '');
  }
}
