import { TestBed } from '@angular/core/testing';

import { TCPartsCountryBidProductCategoryService } from './tcparts-country-bid-product-category.service';

describe('TCPartsCountryBidProductCategoryService', () => {
  let service: TCPartsCountryBidProductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TCPartsCountryBidProductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
