import { Component } from '@angular/core';
import { Customer, Address } from './model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container bg-light">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 [style.color] = "nameColor"  class="text-left m-4" [class.isActive] ="isActive" >{{ customer.name.toUpperCase() }}</h1>
      </div>
    </div>
    <div class="panel-body text-center">
      <div class="row">
        <div class="col-sm-8">
        <p>{{ customer.description }}</p>
        <p>Wiek: {{ customer.age }}</p>
        <p></p>
        <br>
        <button (click)="change()" type="button" class="btn btn-primary m-5">Przełącz podkreślenie</button>
        <br>
        <input #nameInput type="text" [value]="customer.name" (input)="customer.name = nameInput.value">
        </div>

        <div class="col-sm-4">
        <img [src]="customer.photoUrl" >
        </div>
      </div>
      
    </div>
  </div>
  `,
  styles: [
    '.isActive {text-decoration: underline; }'
  ]
})

export class AppComponent {
  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: "assets/images/eustachy.jpg",
    description: "Farmer",
    age: 70,
  }
  address: Address = {
    street: "Nowhere in Desert",
    houseNumber: 1,
    city: "Phoenix",

  }

  nameColor: string = 'blue';
  isActive: boolean = true;

  constructor(){

  }

  change(){
    this.isActive = !this.isActive;
  }

}
