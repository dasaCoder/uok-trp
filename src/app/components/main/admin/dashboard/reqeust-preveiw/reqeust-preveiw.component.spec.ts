import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqeustPreveiwComponent } from './reqeust-preveiw.component';

describe('ReqeustPreveiwComponent', () => {
  let component: ReqeustPreveiwComponent;
  let fixture: ComponentFixture<ReqeustPreveiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqeustPreveiwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqeustPreveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
