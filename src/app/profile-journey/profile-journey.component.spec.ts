import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJourneyComponent } from './profile-journey.component';

describe('ProfileJourneyComponent', () => {
  let component: ProfileJourneyComponent;
  let fixture: ComponentFixture<ProfileJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
