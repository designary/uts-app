import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPostComponent } from './status-post.component';

describe('StatusPostComponent', () => {
  let component: StatusPostComponent;
  let fixture: ComponentFixture<StatusPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
