import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAdminViewComponent } from './request-admin-view.component';

describe('RequestAdminViewComponent', () => {
  let component: RequestAdminViewComponent;
  let fixture: ComponentFixture<RequestAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
