import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormationServiceService } from '../Services/formation-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  filterTerm:any
  form:any={
  }
  closeResult = '';

  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false
  file: any;
  user: any;
  uneFormation: any;
  maPhoto: any;
  monTitre: any;
  maDesc: any;
  monDuree: any;
  monUrl: any;
  monEtat: any;
  idFor: any;
  idformation: any;
  file2: any;
  idformat:any

  fileChangm(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
    }

    fileChangm2(event:any) {
      // console.log("Mon ID = "+idformat)
      this.file2 = event.target.files[0]
     this.serviceFormation.updatePhoto(this.idformat, this.file2).subscribe(data=>{  this.mesformations();})
     this.mesformations();
      }

  mesformation: any;
  constructor(private serviceFormation:FormationServiceService,private modalService: NgbModal,private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.onSelect();
    // this.mesformations()
  }
// ===================================== MODIFIER UNE IMAGES
  getFormID(idformat:any){
      this.serviceFormation.updatePhoto(idformat, this.file2).subscribe(data=>{  this.mesformations();})
  }
// ================================FAIRE LE FILTRAGE ICI
  onSelect(){
    if(this.form.choix == "active"){
      this.serviceFormation.mesFormationsParEtat(true).subscribe(data=>{
        this.mesformation = data
      })

    }
    else if(this.form.choix == "desactive"){
      this.serviceFormation.mesFormationsParEtat(false).subscribe(data=>{
        this.mesformation = data
      })
    }
    else{ this.form.choix = "toutelesformations"
    this.mesformations()
  }
  }



  // ===================================== TOUTE LES FORMATION
  mesformations(){
    this.serviceFormation.mesFormations().subscribe(data=>{
      this.mesformation = data
    })
  }

  // =========================================== SUPPRIMER UNE FORMATION

  supprimer(idformation:any){
  Swal.fire({
    heightAuto: false,
    text: "Quant vous supprimer il est impossible de l'avoir ! \n Voulez-vous supprimer ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#04CF72',
    cancelButtonText: 'Annuler',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Supprimer'
  }).then((result) => {
    if (result.isConfirmed) {
 this.serviceFormation.supprimerFormation(idformation).subscribe(data=>{
    if(data.status == true){
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: data.message,
        showConfirmButton: false,
        timer: 2000,
      })
      this.mesformations();
    }
  })

    }}
    )
  }

  // ==================
  onSubmit(){
    this.user = this.tokenStorage.getUser();

    const {urlformation, dureformation, description, titreformation,} = this.form;

    this.serviceFormation.ajouterFormation(this.user.id,urlformation,description,dureformation,titreformation, this.file,).subscribe(data=>{
      if(data.status == true){
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
        this.mesformations();
        // location.reload();
        // this.modalService.dismissed()
        
      }
      else{
        Swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
  }
















  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  
  open2(content: any,idformation:any) {
    // alert(idformation)

this.serviceFormation.lesFormationsParId(idformation).subscribe(data=>{
  this.uneFormation = data
  this.idFor = this.uneFormation.idformation
  this.maPhoto = this.uneFormation.file
  this.monTitre = this.uneFormation.titreformation;
  this.monDuree = this.uneFormation.dureformation;
  this.maDesc = this.uneFormation.description;
  this.monUrl = this.uneFormation.urlformation;
  this.monEtat = this.uneFormation.etat


  console.log("Titre = "+this.monTitre)

})

		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  // =============================================================================== Modifier ================
  Modifier(idformation:any){
// alert("ID "+idformation)
    this.serviceFormation.lesFormationsParId(idformation).subscribe(data=>{
      this.uneFormation = data
    })
 
    if(this.form.titreformations2 == undefined){
      this.form.titreformations2 = this.uneFormation.titreformation
    }
    if(this.form.etat == undefined){
      this.form.etat = this.uneFormation.etat
    }
    if(this.form.urlformation2 == undefined){
      this.form.urlformation2 = this.uneFormation.urlformation
    }
    if(this.form.description2 == undefined){
      this.form.description2 = this.uneFormation.description
    }
    if(this.form.dureformation2 == undefined){
      this.form.dureformation2 = this.uneFormation.dureformation
    }


    console.log("Image = "+this.file2)

    this.serviceFormation.modifierFormation(idformation, this.form.etat,this.form.urlformation2,this.form.description2,this.form.dureformation2,this.form.titreformations2).subscribe(data=>{
      if(data.status == true){
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
        this.mesformations();

      }
      else{
        Swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
  }

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
