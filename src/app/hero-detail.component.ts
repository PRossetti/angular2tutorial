import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

// To define a component, you always import the Component symbol.
@Component({
  selector: 'hero-detail',
  template: `<div *ngIf="hero">
               <h2>{{hero.name}} details!</h2>
               <div><label>id: </label>{{hero.id}}</div>
               <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
               </div>
             </div>`
})
// Always export the component class because you'll always import it elsewhere.
export class HeroDetailComponent implements OnInit {
  //the @Input decorator tells Angular that this property is public and available for binding by a parent component. Without @Input, Angular refuses to bind to the property.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
    console.log('Se inicializo el componenten HeroDetailComponent');
  }

}
