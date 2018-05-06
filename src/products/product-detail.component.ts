import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
   // selector:'pm-product-detail',
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle:string = 'Product Detail';
    constructor(private _route:ActivatedRoute){ //_route is an object of ActivatedRoute. It is udeful for handling the info the URL.

    }

    ngOnInit(){
        // now get the id from the URL. products and id are 2 values. id is at 1st index.
        //It is in the form of string. convert to number. + symbol is used to convert from string to number.
        let id = +this._route.snapshot.paramMap.get('id'); // id is from app module ts
        this.pageTitle += `${id}`;
    }

}