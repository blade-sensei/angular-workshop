import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component {
  heroTitle = "Filmora 12 is Here, your Freedom to Creativity";

  @Output() changeToInSlider = new EventEmitter<string>();
 
  seeUpdate() {
    alert( "updates !")
  }

  goTo( direction: 'previous' | 'next') {
    this.changeToInSlider.emit(direction);
  }

}
