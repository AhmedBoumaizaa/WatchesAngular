import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; //un tableau de Produit

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: "Montre Omega Seamaster",
        sexe: 'H',
        prixProduit: 5200.00,
        dateCreation: new Date("01/10/2021")
      },
      {
        idProduit: 2,
        nomProduit: "Montre Rolex Datejust",
        sexe: 'F',
        prixProduit: 7500.00,
        dateCreation: new Date("05/22/2019")
      },
      {
        idProduit: 3,
        nomProduit: "Montre Casio G-Shock",
        sexe: 'H',
        prixProduit: 199.99,
        dateCreation: new Date("08/15/2020")
      }
    ];
  }
  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
  consulterProduit(id: number): Produit {
    return this.produits.find(p => p.idProduit == id)!;
  }
  updateProduit(prod: Produit) {
    //chercher le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1); //supprimer l'ancien éléments
      this.produits.splice(index, 0, prod); // insérer le nouvel élément
    }
  }

}


export { Produit };

