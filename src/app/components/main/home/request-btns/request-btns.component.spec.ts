import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBtnsComponent } from './request-btns.component';

describe('RequestBtnsComponent', () => {
  let component: RequestBtnsComponent;
  let fixture: ComponentFixture<RequestBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
