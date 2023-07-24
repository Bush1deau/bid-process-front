import { TestBed } from '@angular/core/testing';

import { TCPartsCountryBidProductCategoriesService } from './tcparts-country-bid-product-categories.service';

describe('TCPartsCountryBidProductCategoriesService', () => {
  let service: TCPartsCountryBidProductCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TCPartsCountryBidProductCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
