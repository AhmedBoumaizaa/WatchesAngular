import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Quantity } from '../model/quantity.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  Quantities!: Quantity[];

  

  message :string | undefined;

  constructor(private produitService: ProduitService, private router: Router) { }
  ngOnInit(): void {
    this.Quantities = this.produitService.listeQuantity();
  }
  //declare new qt et idmodel

  newQuantity!: Quantity;
  newidmodel!: number;
  
  addProduit() {
    this.newQuantity = this.produitService.consulterQuantity(this.newidmodel);
  this.produitService.ajouterProduit(this.newProduit);
  this.newProduit.quantity = this.newQuantity;
  this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succés !";
  this.router.navigate(['produits']);
  }
}
