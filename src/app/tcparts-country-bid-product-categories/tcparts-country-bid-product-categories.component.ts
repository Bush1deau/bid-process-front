import {Component, OnInit} from '@angular/core';
import {TCPartsCountryBidProductCategory} from "../models/TCPartsCountryBidProductCategory.model";
import {TCPartsCountryBidProductCategoryService} from "../services/tcparts-country-bid-product-categories.service";

@Component({
  selector: 'app-tcparts-country-bid-product-categories',
  templateUrl: './tcparts-country-bid-product-categories.component.html',
  styleUrls: ['./tcparts-country-bid-product-categories.component.css']
})
export class TCPartsCountryBidProductCategoriesComponent implements OnInit{
  tCPartsCountryBidProductCategories: any[] | undefined;

  constructor(private tCPartsCountryBidProductCategoryService: TCPartsCountryBidProductCategoryService) { }

  ngOnInit() {
    this.getAllTCPartsCountryBidProductCategory();
  }

  getAllTCPartsCountryBidProductCategory() {
    this.tCPartsCountryBidProductCategoryService.getAllTCPartsCountryBidProductCategory()
      .subscribe(
        (response) => {
          this.tCPartsCountryBidProductCategories = response;
        },
        (error) => {
          console.error('Une erreur est survenue lors de la récupération des requetes :', error);
        }
      );
  }
}
