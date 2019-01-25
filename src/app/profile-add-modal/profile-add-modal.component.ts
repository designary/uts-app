import { 
  Component, OnInit, Input, Output, OnChanges, EventEmitter, 
  trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-profile-add-modal',
  templateUrl: './profile-add-modal.component.html',
  styleUrls: ['./profile-add-modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ProfileAddModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }
  
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}