import { Component, OnInit } from '@angular/core';
import { FermeService } from '../Services/ferme.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit{
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  touteLesFerme: any;
  constructor(private fermeService:FermeService,){}
  ngOnInit() {
    this.touteLesFermes()
  }
  // ========================================= Toute les fermes
  touteLesFermes(){
    this.fermeService.touteLesFerme().subscribe(data=>{
      this.touteLesFerme = data
      // this.nbreFerme = this.touteLesFerme.length
    })
  }
}
