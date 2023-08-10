import {Component, OnInit} from '@angular/core';
import {BidsService} from "../services/bids.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit{
  bids: any[] = [];
  selectedBid: any = null;
  newStatus: string = '';

  constructor (private bidsService: BidsService, private route: ActivatedRoute,) { }

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
      const oldBid = { ...this.selectedBid };
      this.bidsService.updateBidStatus(this.selectedBid.id, this.newStatus).subscribe(
        (updatedBid) => {
          console.log('Statut de l\'enchère mis à jour avec succès !');
          console.log('Avant la mise à jour:', oldBid);
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

  deleteBid(bid: any): void {
    if (bid.id != null) {
      this.bidsService.deleteBid(bid.id).subscribe(
        () => {
          console.log('Enchère supprimée avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'enchère :', error);
        }
      );
    } else {
      console.error('ID d\'enchère non valide pour la suppression.');
    }
  }
}
