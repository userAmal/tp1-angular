import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits : string[];
  constructor(){
    this.produits=["PC asus","Imprimante Epson","Tablette samsung"]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
