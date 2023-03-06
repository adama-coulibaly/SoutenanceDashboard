import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../Models/User';
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

users:User={
  id: undefined,
  nom: undefined,
  prenom: undefined,
  username: undefined,
  email: undefined,
  adresse: undefined,
  password: undefined,
  avatar: undefined,
  etat: undefined
}

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
  // ==============================================
  banirUser(idUser:any){
   
    Swal.fire({
      heightAuto: false,
      text: "Ete vous sùre de vouloir banir cet utilisateur ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04CF72',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
  
        this.users.etat = false
        this.userService.banirUser(this.users,idUser).subscribe(data=>{})
        Swal.fire({
                heightAuto: false,
                title: 'Supprimer avec succes!',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#04CF72',
                confirmButtonText: 'OK',
                reverseButtons: true
              })
              window.location.reload()
      }
    })
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
