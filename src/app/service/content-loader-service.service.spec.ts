import { TestBed } from '@angular/core/testing';

import { ContentLoaderServiceService } from './content-loader-service.service';

describe('ContentLoaderServiceService', () => {
  let service: ContentLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
