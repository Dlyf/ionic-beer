import { TestBed } from '@angular/core/testing';
import { BeerService } from '../service/beer.service';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });
});
