import { TestBed } from '@angular/core/testing';

import { NotificationToasterService } from './notification-toaster.service';

describe('NotificationToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationToasterService = TestBed.get(NotificationToasterService);
    expect(service).toBeTruthy();
  });
});
