import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(birthDate: Date): string {
    return 'My Birthday is: ' + birthDate.toDateString() + '!';
  }

}
