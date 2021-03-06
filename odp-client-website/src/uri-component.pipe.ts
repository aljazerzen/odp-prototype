import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';


@Injectable()
export class UriComponentPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return decodeURIComponent(value);
    } catch {
      console.warn('cannot decode uri component: ', value);
      return null;
    }
  }
}