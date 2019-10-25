import { RequestAdminViewComponent } from '../request-admin-view/request-admin-view.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleComponent } from './shedule.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SheduleComponent', () => {
  let component: SheduleComponent;
  let fixture: ComponentFixture<SheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleComponent, RequestAdminViewComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
