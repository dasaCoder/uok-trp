import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleToReqComponent } from './add-vehicle-to-req.component';

describe('AddVehicleToReqComponent', () => {
  let component: AddVehicleToReqComponent;
  let fixture: ComponentFixture<AddVehicleToReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleToReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleToReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
