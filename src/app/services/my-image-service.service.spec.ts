import { TestBed } from '@angular/core/testing';

import { MyImageServiceService } from './my-image-service.service';

describe('MyImageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyImageServiceService = TestBed.get(MyImageServiceService);
    expect(service).toBeTruthy();
  });
});
