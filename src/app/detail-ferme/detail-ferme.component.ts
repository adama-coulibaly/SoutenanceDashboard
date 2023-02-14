import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FermeService } from '../Services/ferme.service';

@Component({
  selector: 'app-detail-ferme',
  templateUrl: './detail-ferme.component.html',
  styleUrls: ['./detail-ferme.component.scss']
})
export class DetailFermeComponent implements OnInit {
  idferme: any;
  info: any;
  monProduit: any;
  bien: any;
  mesFIltres: any;
  taille: any;
  monEtat: any;
  produits: any;
  isModalOpen = false;
  etatsProds: any;
  produitTotal: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  

  constructor(private route:ActivatedRoute,private fermeService:FermeService) { }

  ngOnInit(): void {
     // RECUPERATION DES INFORMATION D'UNE FERME
     this.idferme = +this.route.snapshot.params["idferme"];
     this.fermeService.infoFermes(this.idferme).subscribe(data=>{
       this.info = data;
     });

     this.reloadProduction()
     this.reloadPage()
  }

// ========================================================= LES PRODUCTIONS
  reloadProduction(){
  
    // RECUPERATION DES PRODUCTIONS D'UNE FERME
    const idferme = +this.route.snapshot.params["idferme"];
    this.fermeService.lesProductions(idferme).subscribe(data=>{
      this.mesFIltres = data;
      // this.taille = this.production.length
    }); 
}
reloadPage(){
  // RECUPERATION DES INFORMATION D'UNE FERME
  const idferme = +this.route.snapshot.params["idferme"];
 
      // RECUPERATION DES PRODUITS PAR FERMES ET ETATS
      this.monEtat = true
      this.fermeService.lesProduitsParFermesEtat(idferme,this.monEtat).subscribe(data=>{
        this.produits = data;
        for(let etatsProd of this.produits)
        if(etatsProd.etat == true)
            this.etatsProds = etatsProd.etat
    
        this.produitTotal = this.produits.length
      });
}

// ========================================================== ICI ON SUPRIME UN PRODUITS ==========================================================
supprimerProd(idproduit:any){
 
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

}
}
