import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Quantity } from '../model/quantity.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  Quantities! : Quantity[];
  updatedIdmodel! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService) {
  }
  ngOnInit(): void {
    this.Quantities = this.produitService.listeQuantity();

    // console.log(this.route.snapshot.params.id);
    this.currentProduit =
      this.produitService.consulterProduit(this.activatedRoute.snapshot.
        params['id']);
    console.log(this.currentProduit);
    this.updatedIdmodel=this.currentProduit.quantity.idmodel;
  }
  updateProduit() {
  this.currentProduit.quantity = this.produitService.consulterQuantity(this.updatedIdmodel);
  this.produitService.updateProduit(this.currentProduit);
  this.router.navigate(['produits']);
  }

}
