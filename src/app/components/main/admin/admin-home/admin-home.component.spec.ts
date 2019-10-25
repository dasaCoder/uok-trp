import { SearchComponent } from './search/search.component';
import { SheduleComponent } from './../shedule/shedule.component';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponent } from './admin-home.component';
import { MatTabsModule } from '@angular/material';

describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeComponent, VehicleTableComponent, SheduleComponent,SearchComponent ],
      imports: [MatTabsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
