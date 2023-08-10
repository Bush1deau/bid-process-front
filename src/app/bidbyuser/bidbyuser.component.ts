import {Component, OnInit} from '@angular/core';
import {BidsService} from "../services/bids.service";
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: 'app-bidbyuser',
  templateUrl: './bidbyuser.component.html',
  styleUrls: ['./bidbyuser.component.css']
})
export class BidbyuserComponent implements OnInit{
  bids: any[] = []; // Assurez-vous de remplacer "any" par le type approprié pour votre modèle d'enchère
  userId?: number; // Le type peut être différent en fonction de la structure de votre ID utilisateur

  constructor(private bidsService: BidsService) {}

  ngOnInit() {
    // Récupérer l'ID de l'utilisateur depuis le localStorage
    this.userId = Number(localStorage.getItem('userId'));

    // Appeler le service pour récupérer les objets bid en fonction de l'ID de l'utilisateur
    this.bidsService.getBidsByUserId(this.userId).subscribe(
      (bids) => {
        this.bids = bids;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enchères', error);
        // Gérer l'erreur si nécessaire
      }
    );
  }
}
