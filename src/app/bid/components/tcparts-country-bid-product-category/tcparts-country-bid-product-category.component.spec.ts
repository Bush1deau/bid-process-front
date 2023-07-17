import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCPartsCountryBidProductCategoryComponent } from './tcparts-country-bid-product-category.component';

describe('TCPartsCountryBidProductCategoryComponent', () => {
  let component: TCPartsCountryBidProductCategoryComponent;
  let fixture: ComponentFixture<TCPartsCountryBidProductCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCPartsCountryBidProductCategoryComponent]
    });
    fixture = TestBed.createComponent(TCPartsCountryBidProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
