import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipePipe implements PipeTransform {

  age: string | number;
  transform(value: any, ...args: unknown[]): unknown {
    value = new Date(value);  // if orginal type was a string
    const timeDiff = Math.abs(Date.now() - value.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    return this.age
  }

}
