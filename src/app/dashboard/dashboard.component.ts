import { Component, OnInit } from '@angular/core';
import { AccueilServiceService } from '../Services/accueil-service.service';
import { FermeService } from '../Services/ferme.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  page = 1
  mesUsers: any;
  nbre: any;
  nbreFerme: any;
  touteLesFerme: any;
  touteLesProduit: any;
  nbreProduits: any;
  touteLesVente: any;
  nbreVente: any;
  venteParMois: any;
  filterTerm:any

constructor(private tokenStorage:TokenStorageService,private serviceAccueil:AccueilServiceService,private userService:UserService,private fermeService:FermeService,){}

  ngOnInit(): void {
 
   
    this.user = this.tokenStorage.getUser();

    this.tousLesUtilisateurs()
    this.touteLesFermes()
    this.touteLesProduits()
    this.touteLesVentes()

  }

  // ====================================== Tous les utilisateurs
  tousLesUtilisateurs(){
    this.userService.toutLesUtilisateur().subscribe(data=>{
      this.mesUsers = data
      this.nbre = this.mesUsers.length
      console.log("Nbre "+this.nbre)
    })
  }

  // ========================================= Toute les fermes
  touteLesFermes(){
    this.fermeService.touteLesFerme().subscribe(data=>{
      this.touteLesFerme = data
      this.nbreFerme = this.touteLesFerme.length
    })
  }

  // ========================================= Tous les Produits
  touteLesProduits(){
    this.fermeService.lesProduits().subscribe(data=>{
      this.touteLesProduit = data
      this.nbreProduits = this.touteLesProduit.length
    })
  }

 // ========================================= Tous les Produits
 touteLesVentes(){
  this.fermeService.touteLesVentes().subscribe(data=>{
    this.touteLesVente = data
    this.nbreVente = this.touteLesVente.length

    for(let mois of this.touteLesVente){
      this.venteParMois +=mois.quantite 
      console.log("ff "+this.venteParMois)
    }
  })
 }



}
