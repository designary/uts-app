import { Component } from '@angular/core';

@Component({
  selector: 'for-tooltip',
  template: `
    <div class="tooltip-container" [ngStyle]="{'border': '1px solid red'}">
      <ng-content></ng-content>
    </div>
  `,
})
export class ForTooltipComponent {
}
