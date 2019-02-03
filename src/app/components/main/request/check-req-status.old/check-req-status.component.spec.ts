import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReqStatusComponent } from './check-req-status.component';

describe('CheckReqStatusComponent', () => {
  let component: CheckReqStatusComponent;
  let fixture: ComponentFixture<CheckReqStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckReqStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReqStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
