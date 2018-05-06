import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    //styles:['thead {color:#337AB7;font-size:24px}'] // for internal styling header font to blue
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    
// Interpolation - pass pageTitle to html
    //String pageTitle = "Product List";
        pageTitle:string = "Product List"; // varName:dataType = "" ; string declaration for pageTitle 
        age:number = 20;
        imageWidth:number = 60;
        imageMargin:number = 5;
        
        showImage:boolean = false;
        errorMessage:string; // to store error messages at subsribe

        listFilter:string = '';

    //String products[] = ["a","b","c"]; 
    //To accomodate data from json, we need a random array that can accomodate any type of data. Angular gives us any datatype
      
        //products:any[] =[ {  // access IProduct interface
            products:  IProduct[]=[ /*{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }*/ ]; 
   // product : IProduct[] = []

   // for injecting service - for creating an instance of the service
   // private - so that the constructor is accessible to this class only.
   //every servce name is prefixed with _
    constructor(private _productService:ProductService){ //_productService is an object of ProductService class

    }

   ngOnInit(): void { // onInit,onChange,onDestroy lifecycle hooks
   // throw new Error("Method not implemented.");
   console.log("NgOnIt funtion is called"); // this hook is called whenever we initialise the data
            this._productService.getProducts()// we need the date before page is rendered
                    .subscribe(products => this.products = products, // value fn that is returned
                        error => this.errorMessage = <any>error);  // error fn
}

   // writing functions in angular
   toggleImage():void{
       this.showImage= !this.showImage;
   }

   onRatingClicked(message:string):void{
    this.pageTitle = "Product List" +message; // message has $event content
}
}