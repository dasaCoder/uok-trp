import { TestBed, inject } from '@angular/core/testing';

import { AvailableVehicleService } from './available-vehicle.service';

describe('AvailableVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableVehicleService]
    });
  });

  it('should be created', inject([AvailableVehicleService], (service: AvailableVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
