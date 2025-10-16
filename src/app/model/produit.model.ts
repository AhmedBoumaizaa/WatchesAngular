import { Quantity } from "./quantity.model";

export class Produit {/*interface = on ne peut pas creer des instructeurs et des méthodes */ 
    idProduit!/*peut avoir une valeur ou non*/: number;
    nomProduit!: string; 
    sexe!: string;
    prixProduit!: number;
    dateCreation!: Date;
    quantity!: Quantity;
}
