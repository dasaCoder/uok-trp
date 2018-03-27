import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMsgComponent } from './status-msg.component';

describe('StatusMsgComponent', () => {
  let component: StatusMsgComponent;
  let fixture: ComponentFixture<StatusMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
