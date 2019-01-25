import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHeroComponent } from './feature-hero.component';

describe('FeatureHeroComponent', () => {
  let component: FeatureHeroComponent;
  let fixture: ComponentFixture<FeatureHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
