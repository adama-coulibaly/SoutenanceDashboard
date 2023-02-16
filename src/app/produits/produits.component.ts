import { Component, OnInit } from '@angular/core';
import { FermeService } from '../Services/ferme.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  filterTerm:any
  mesprod: any;
  constructor(private fermeService:FermeService,) { }

  ngOnInit() {
    this.tousLesProduits();
  }

  tousLesProduits(){
    this.fermeService.lesProduits().subscribe(data=>{
      this.mesprod = data
    })
  }

}
