import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    //give a name to the pipe. this is similar to inbuilt pipes like uppercase
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
   // transform(value: any, ...args: any[]) {
       transform(value:string,character:string):string{
    // pass the product code in value. Value =gdn-001 ; character = '-' What type of character needs to be replaced ? check html file
    //The hyphen in the product code should be replaced by @
        //throw new Error("Method not implemented.");
        return value.replace(character,'@'); // return new value after modification.Here character holds hyphen
    }
}