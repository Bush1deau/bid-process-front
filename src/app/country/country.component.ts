import {Component, OnInit} from '@angular/core';
import {CountryService} from "../services/country.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  CountryList: any[] | undefined;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getAllCountries()
  }

  public getAllCountries(){
    this.countryService.getAllCountries()
      .subscribe(
        (response) => {
          this.CountryList = response;
        },
        (error) => {
          console.error('Une erreur est survenue lors de la récupération des pays :', error);
        }
      );
  }
}
