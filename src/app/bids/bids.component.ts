import {Component, OnInit} from '@angular/core';
import {BidsService} from "../services/bids.service";

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit{
  bids: any[] = [];
  selectedBid: any = null;
  newStatus: string = '';

  constructor(private bidsService: BidsService) {}

  ngOnInit() {
    this.bidsService.getAllBids().subscribe(
      (bids) => {
        this.bids = bids;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enchères', error);
      }
    );
  }
  openStatusModal(bid: any) {
    this.selectedBid = bid;
    this.newStatus = bid.status;
  }
  updateBidStatus() {
    if (this.selectedBid) {
      this.bidsService.updateBidStatus(this.selectedBid.id, this.newStatus).subscribe(
        (updatedBid) => {
          console.log('Statut de l\'enchère mis à jour avec succès !');
          console.log('Après la mise à jour:', updatedBid.status);
          this.newStatus = updatedBid.status
          this.selectedBid = updatedBid.status
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du statut de l\'enchère', error);
        }
      );
    }
  }
}
