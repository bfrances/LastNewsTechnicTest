import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'relativeTextTime'
})
export class RelativeTextTimePipe implements PipeTransform {

  transform(seconds: number): string {
    seconds = Math.abs(seconds);
    if (seconds < 60 ){
      return 'moins d\'une minute';
    }
    else if (seconds < 3600){
      const minute: number = Math.floor(seconds / 60);
      return minute + ' minute' + ((minute >= 2) ? 's' : '');
    }
    else if (seconds < 3600 * 24){
      const hours: number = Math.floor(seconds / 3600);
      return hours + ' heure' + ((hours >= 2) ? 's' : '');
    }
    else if (seconds < 3600 * 24 * 30){
      const days: number = Math.floor(seconds / (3600 * 24));
      return days + ' jour' + ((days >= 2) ? 's' : '');
    }
    else if (seconds < (3600 * 24 * 30 * 12)){
      const months: number = Math.floor(seconds / (3600 * 24 * 30));
      return months + ' mois';
    }
    const years: number = Math.floor(seconds / (3600 * 24 * 30 * 12));
    return years + ' année' + ((years >= 2) ? 's' : '');
  }
}

