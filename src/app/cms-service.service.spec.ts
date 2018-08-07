import { TestBed, inject } from '@angular/core/testing';

import { CmsServiceService } from './cms-service.service';

describe('CmsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsServiceService]
    });
  });

  it('should be created', inject([CmsServiceService], (service: CmsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
