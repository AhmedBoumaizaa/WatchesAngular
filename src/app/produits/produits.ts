import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule, DatePipe } from '@angular/common';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, DatePipe,RouterLink],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits?: Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService) {
    //this.produits=[];
  }
  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }
  supprimerProduit(prod:Produit)
  {
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
if (conf)
    this.produitService.supprimerProduit(prod);
  }


}
