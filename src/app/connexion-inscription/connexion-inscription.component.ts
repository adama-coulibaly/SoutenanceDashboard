import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/login-services.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.css']
})
export class ConnexionInscriptionComponent implements OnInit {

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  

  isLoggedIn = false;
  isLoginFailed = false;
   // ICI ON PREND LES ELEMENTS POUR LE FORMULAIRE
   form: any = {
    usernameOrEmail: null,
    password: null
  };
  roles: any;
  errorMessage: any;
  success: any;
  erreur: any;

  constructor(private route:Router,private authService:AuthService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
this.animerForme()
  }


  // :::::::::::::::::::::::::::::::::::::::  FONCTION POUR LES ANIMATIONS DE FORMULAIRE

  animerForme(){
    const signUpButton = document.getElementById('signUp') as HTMLButtonElement;
    const signInButton = document.getElementById('signIn') as HTMLButtonElement;
    const container = document.getElementById('container') as HTMLDivElement;

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  // ::::::::::::::::::::::::::::::::::::::::: CONNEXION

  onSubmit(): void {
    const { usernameOrEmail, password } = this.form;

    this.authService.login(usernameOrEmail, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if(this.isLoggedIn == true){
        this.route.navigate(['/acceuil']);
        }
        else{
          this.isLoginFailed = true;
        }
      },
      err => { this.isLoginFailed = true;
        this.errorMessage = err.error.message;
       
      }
    );
  }

  // ::::::::::::::::::::::::::::::::::::::::: INSCRIPTION

  onSubmit2(): void {
    // LA METHODE DE VERIFICATION DES MOTS DE PASSE N'EST PAS GERE D'ABORD
    const { nom, prenom, adresse, telph, emails, password,idstatus } = this.form;
   
    
    console.log("ID "+idstatus)

    // if (this.form.password == this.form.pass2) {
      this.authService.registerO(nom, prenom, telph, emails, password, adresse,1).subscribe(
        data => {
          this.success = data
          if (this.success.status == true) {
            Swal.fire({
              heightAuto: false,
              // position: 'top-end',
              icon: 'success',
              text: 'Compte créer avec succès',
              showConfirmButton: false,
              timer: 2500
            })
            this.viderFormulaire()
            // this.router.navigateByUrl('/connexion')
          }
          else{
            Swal.fire({
              heightAuto: false,
              // position: 'top-end',
              icon: 'warning',
              text: this.success.message,
              showConfirmButton: false,
              timer: 2500
            })
          }
        }
      );
    } 
    // else {
    //   this.erreur = "Mot de passe incorrect !"
    // }

viderFormulaire(){
  this.form.nom ='',
  this.form.prenom='',
  this.form.telph='',
  this.form.emails='',
  this.form.password='',
  this.form.adresse=''
}
  }


