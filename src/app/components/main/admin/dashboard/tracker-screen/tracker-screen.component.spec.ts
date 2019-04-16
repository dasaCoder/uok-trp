import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerScreenComponent } from './tracker-screen.component';

describe('TrackerScreenComponent', () => {
  let component: TrackerScreenComponent;
  let fixture: ComponentFixture<TrackerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
