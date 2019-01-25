import { Component } from '@angular/core';

@Component({
  selector: 'app-post-activity-icons',
  templateUrl: './post-activity-icons.component.html',
  styleUrls: ['./post-activity-icons.component.scss']
})
export class PostActivityIconsComponent {
  constructor() {
  }

  stateFlag = false;

  toggleState() {
      this.stateFlag = !this.stateFlag;
  }
}