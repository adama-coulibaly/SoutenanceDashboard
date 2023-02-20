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
  fileChangm(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
    }
  mesformation: any;
  constructor(private serviceFormation:FormationServiceService,private modalService: NgbModal,private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.onSelect();
    // this.mesformations()
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

    }})


 

  }

  // ==================
  onSubmit(){
    this.user = this.tokenStorage.getUser();

    const {urlformation, dureformation, description, titreforlation,} = this.form;

    this.serviceFormation.ajouterFormation(this.user.id,urlformation,description,dureformation,titreforlation, this.file,).subscribe(data=>{
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
