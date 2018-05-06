import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{

    // we have to pass the rating value from product-list.component.html(throw) to star component.ts(catch).
    //So @input decorator is used to catch the rating input. html throw will be in the form of property binding.
    @Input() rating:number ; //=4;  for every row,we have a different rating.dynamically we have to create the UI.
    // use ngOnchanges as the rating value is getting changed and hence starwidth is getting changed.
    // to use ngOnchanges implment OnChanges interface.
    starWidth:number;
   // console.log("Rating received::"+rating);
    @Output() ratingClicked :EventEmitter<string> = new EventEmitter<string>();//to generate an event. 
    //pass this event to maincomponent. use eventemitter to pass the value.
    //Eventemitter is a generic class that emits evemts or messages from sub component to main component.
    //ngOnChanges(changes: SimpleChanges): void {
    ngOnChanges(): void {
        //throw new Error("Method not implemented.");
        //calc new width as soon as there is a change in width
        this.starWidth = this.rating * 86/5; // this refers to the current instance of the variable.
        console.log("Rating received::"+this.rating);
        console.log("Star Width::"+this.starWidth); 
    }

    onClick():void{
        console.log(`The rating clicked is ${this.rating}!!!`);// $ symbol to access the value
        //emit method passes the values from sub component to main component
        this.ratingClicked.emit(`The rating clicked is ${this.rating}!!!`);  
        
    }

}