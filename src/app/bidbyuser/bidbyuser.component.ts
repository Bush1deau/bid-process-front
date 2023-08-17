import {Component, OnInit} from '@angular/core';
import {BidsService} from "../services/bids.service";
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: 'app-bidbyuser',
  templateUrl: './bidbyuser.component.html',
  styleUrls: ['./bidbyuser.component.css']
})
export class BidbyuserComponent implements OnInit{
  bids: any[] = [];
  userId?: number;

  constructor(private bidsService: BidsService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.userId = Number(localStorage.getItem('userId'));
    console.log(this.userId)

    this.bidsService.getBidsByUserId(this.userId).subscribe(
      (bids) => {
        this.bids = bids;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enchères', error);
      }
    );
  }
}
