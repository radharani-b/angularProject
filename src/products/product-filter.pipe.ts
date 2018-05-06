import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    //transform(value: any, ...args: any[]) {
        transform(value:IProduct[],filterBy:string):IProduct[] {
      // filterBy can be cart,CART,CaRt . Search has to be case insensitive
      filterBy = filterBy ? filterBy.toLocaleLowerCase():null; // ternary operator on search string.
        //  throw new Error("Method not implemented."); 
      return filterBy ? value.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1):value;
    }
}