import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BidsService} from "../services/bids.service";
import {CountryService} from "../services/country.service";
import {TCPartsService} from "../services/tcparts.service";
import {ProductCategoryService} from "../services/productcategory.service";
import {UtilisateurService} from "../services/utilisateur.service";
import {LocalStorageService} from "../services/local-storage.service";


@Component({
  selector: 'app-bids-form',
  templateUrl: './createBid.component.html',
  styleUrls: ['./createBid.component.css'],
})
export class BidsFormComponent implements OnInit {
  bidsForm!: FormGroup;
  infoCreate! : boolean;
  countries: any[] = [];
  tcParts: any[] = [];
  productCategories: any[] = [];

  constructor(private formBuilder: FormBuilder, private localStorageService:LocalStorageService, private bidsService: BidsService, private countryService : CountryService, private tcPartsService : TCPartsService, private productCategoryService : ProductCategoryService, private utilisateurService : UtilisateurService) {}

  ngOnInit() {
    this.infoCreate = false;
    this.countryService.getAllCountries().subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        console.error('Erreur lors de la récupération des pays', error);
      }
    );

    this.tcPartsService.getAllTCParts().subscribe(
      (tcParts) => {
        this.tcParts = tcParts;
      },
      (error) => {
        console.error('Erreur lors de la récupération des TCParts', error);
      }
    );

    this.productCategoryService.getAllProductCategory().subscribe(
      (productCategories) => {
        this.productCategories = productCategories;
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories de produits', error);
      }
    );
    this.bidsForm = this.formBuilder.group({
      name: ['', Validators.required],
      customerName: ['', Validators.required],
      opportunityType: ['', Validators.required],
      opportunityMargin: ['', Validators.required],
      contractStart: ['', Validators.required],
      contractDuration: ['', Validators.required],
      pricingModel: ['', Validators.required],
      scopeQuery: ['', Validators.required],
      bidAndTendersRead: ['', Validators.required],
      additionalContent: ['', Validators.required],
      status: "NEW",
      countryId: ['', Validators.required],
      tcPartsId: ['', Validators.required],
      productCategoryId: ['', Validators.required],
      userId : this.localStorageService.get('userId')
    });
  }

  onSubmit() {
    if (this.bidsForm.valid) {

      const formData = this.bidsForm.value;

      const bid = {
        name: formData.name,
        customerName: formData.customerName,
        opportunityType: formData.opportunityType,
        opportunityMargin: formData.opportunityMargin,
        contractStart: formData.contractStart,
        contractDuration: formData.contractDuration,
        pricingModel: formData.pricingModel,
        scopeQuery: formData.scopeQuery,
        bidAndTendersRead: formData.bidAndTendersRead,
        additionalContent: formData.additionalContent,
        status: "NEW",
        country: { id: formData.countryId },
        tcParts: { id: formData.tcPartsId },
        productCategory: { id: formData.productCategoryId },
        user : { id: this.localStorageService.get('userId') }
      };

      this.bidsService.createBid(bid).subscribe(
        (response) => {
          this.infoCreate = true;
          console.log('Nouvelle offre créée avec succès !', response);
          this.bidsForm.reset();
        },
        (error) => {
          console.error('Erreur lors de la création de l\'offre', error);
        }
      );
    }
  }
}
