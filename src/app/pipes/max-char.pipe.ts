import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxChar'
})
export class MaxCharPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    // Initiate 'str' to be the string value
    // Initiate 'len' to be the target length
    let str : string, len : number;
    
    // Try converting the given values
    try {
      str = String(value);
      len = Number(args[0]);
    } catch (error) {
      console.error("Couldnt convert to type: ", {value, args})
      return null;
    }

    // Bypass if string is shorter then target length
    if (str.length < len) return str;

    // Slice String and add "..."
    return str.slice(len) + "..."; 
  }

}
