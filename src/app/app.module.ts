import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PrincipalComponent } from './principal/principal.component';
import { ConnexionInscriptionComponent } from './connexion-inscription/connexion-inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailFermeComponent } from './detail-ferme/detail-ferme.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ProduitsComponent } from './produits/produits.component';
import { FormationComponent } from './formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AcceuilComponent,
    SidenavComponent,
    HeaderComponent,
    PrincipalComponent,
    ConnexionInscriptionComponent,
    DetailFermeComponent,
    ProduitsComponent,
    FormationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

     // * MATERIAL IMPORTS
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     FormsModule,
     HttpClientModule,
     Ng2SearchPipeModule,
     NgxPaginationModule,
     NgxIntlTelInputModule,
     FormsModule,
     
    //  PopoverController
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
