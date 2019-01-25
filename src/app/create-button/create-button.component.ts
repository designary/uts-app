import { Component } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent {

  constructor() { }

  stateFlag = false;

  toggleState() {
      this.stateFlag = !this.stateFlag;
  }

}
