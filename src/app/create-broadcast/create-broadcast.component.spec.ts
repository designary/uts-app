import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBroadcastComponent } from './create-broadcast';

describe('CreateBroadcastComponent', () => {
  let component: SidebarFilterItemComponent;
  let fixture: ComponentFixture<SidebarFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBroadcastItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBroadcastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
