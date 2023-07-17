import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTCPartsCountryBidProductCategoryComponent } from './view-tcparts-country-bid-product-category.component';

describe('ViewTCPartsCountryBidProductCategoryComponent', () => {
  let component: ViewTCPartsCountryBidProductCategoryComponent;
  let fixture: ComponentFixture<ViewTCPartsCountryBidProductCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTCPartsCountryBidProductCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewTCPartsCountryBidProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
