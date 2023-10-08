import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits ?: Produit[]; //un tableau de Produit
  private produitService= new  ProduitService;
  constructor() {
  //this.produits=[];
  }
  ngOnInit(): void{
    this.produits = this.produitService.listeProduits();
  }

  
}
