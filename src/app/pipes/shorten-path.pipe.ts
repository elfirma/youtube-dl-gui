import { Pipe, PipeTransform } from '@angular/core';
import { ProviderService } from '../backend/provider.service';
import { MaxCharPipe } from './max-char.pipe';

@Pipe({
  name: 'shortenPath'
})
export class ShortenPathPipe implements PipeTransform {

  constructor(private $provider : ProviderService) { }

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
    
    // Split the Path into the folders
    let splitChar = this.$provider.path_seperator,
        elems = str.split(splitChar);

    let first = elems[0];
    let prefix = first + splitChar;
    let last = elems[elems.length - 1];

    // Set the minimum Path
    // ex: "Drive:/.../Folder" or "Drive:/Folder"
    let min = `${prefix}${elems.length > 2 ? ("..." + splitChar) : ""}${elems[elems.length - 1]}`;

    // Shorten last folder if needed
    if (min.length < len) 
      return `${prefix}${(new MaxCharPipe()).transform(last, len - prefix.length)}`
    
    let path = [first, "...", last];

    // Method tp get the length of the Path
    const reduceLength = ( arr : string[] ) : number => arr.join("").length;

    for (let i = 1; i < elems.length-1; i++) {
      
      if (reduceLength(path) + elems[i].length + i + 1 > len) return path.join(splitChar);

      path = [first, elems[i], ...path.shift()]
      
    }

    // Returns the path.
    return elems.join(splitChar);

  }

}
