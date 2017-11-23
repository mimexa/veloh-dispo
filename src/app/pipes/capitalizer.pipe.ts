import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizer'
})
export class CapitalizerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let s='';
    if(value.length>0){
      s=value.charAt(0).toUpperCase();
      if(value.length>1){
        for(let i=1; i<value.length; i++){
          s+=value.charAt(i).toLowerCase();
        }
      }
    }
    return s;
  }

}
