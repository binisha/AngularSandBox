import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideModuleNavComponent } from './side-module-nav.component';

describe('SideModuleNavComponent', () => {
  let component: SideModuleNavComponent;
  let fixture: ComponentFixture<SideModuleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideModuleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideModuleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
