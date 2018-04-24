import { TestBed, inject } from '@angular/core/testing';

import { ExportParameterService } from './export-parameter.service';

describe('ExportParameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportParameterService]
    });
  });

  it('should be created', inject([ExportParameterService], (service: ExportParameterService) => {
    expect(service).toBeTruthy();
  }));
});
