import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionInscriptionComponent } from './connexion-inscription/connexion-inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailFermeComponent } from './detail-ferme/detail-ferme.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
    { path: 'connexion-inscription', component: ConnexionInscriptionComponent },

    { path: '', component: PrincipalComponent,
     children: [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail-ferme/:idferme', component: DetailFermeComponent },

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
