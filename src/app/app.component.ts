import { Component } from '@angular/core';
import { ProductService } from '../products/product.service';

//metadata for the component to be available for external access
@Component({
  selector: 'app-root',
  //template: `<h1>Welcome to Angular JS</h1>
  //<h2>This is the first page</h2>
  //<pm-products></pm-products>` , // Nesting of components
  template:`
    <div>
      <nav class = "navbar navbar-default">
        <a class = "navbar-brand">{{pageTitle}}</a>
        <ul class = "nav navbar-nav">  
        <li><a [routerLink] = "['/welcome']">Home</a></li>
        <li><a [routerLink] = "['/products']">Product List</a></li>
        </ul>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>`,
 providers :[ProductService] 
})
// router link instead of href. router link is converted to href
// we have to put the view in a container class called router outlet.. the router outlet makes the view available in the screen

// class of the component
export class AppComponent {
  title = 'app';
  pageTitle:string ="Angular Product Mgmt";
}
