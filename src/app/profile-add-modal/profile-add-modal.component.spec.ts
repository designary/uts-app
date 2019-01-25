import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddModalComponent } from './profile-add-modal.component';

describe('ProfileAddModalComponent', () => {
  let component: ProfileAddModalComponent;
  let fixture: ComponentFixture<ProfileAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
