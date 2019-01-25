import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActivityIconsComponent } from './post-activity-icons.component';

describe('PostActivityIconsComponent', () => {
  let component: PostActivityIconsComponent;
  let fixture: ComponentFixture<PostActivityIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostActivityIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActivityIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
