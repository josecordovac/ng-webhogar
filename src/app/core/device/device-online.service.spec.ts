import { TestBed } from '@angular/core/testing';

import { DeviceOnlineService } from './device-online.service';

describe('DeviceOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceOnlineService = TestBed.get(DeviceOnlineService);
    expect(service).toBeTruthy();
  });
});
