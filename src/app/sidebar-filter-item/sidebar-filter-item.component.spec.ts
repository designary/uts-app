import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFilterItemComponent } from './sidebar-filter-item.component';

describe('SidebarFilterItemComponent', () => {
  let component: SidebarFilterItemComponent;
  let fixture: ComponentFixture<SidebarFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFilterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
