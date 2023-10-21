import { TestBed } from '@angular/core/testing';

import { SucursalesService } from './sucursales.service';

describe('SucursalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucursalesService = TestBed.get(SucursalesService);
    expect(service).toBeTruthy();
  });
});
