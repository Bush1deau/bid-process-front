import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCPartsCountryBidProductCategoriesComponent } from './tcparts-country-bid-product-categories.component';

describe('TCPartsCountryBidProductCategoriesComponent', () => {
  let component: TCPartsCountryBidProductCategoriesComponent;
  let fixture: ComponentFixture<TCPartsCountryBidProductCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCPartsCountryBidProductCategoriesComponent]
    });
    fixture = TestBed.createComponent(TCPartsCountryBidProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
