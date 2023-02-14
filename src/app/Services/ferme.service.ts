import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FermeService {

  constructor(private http: HttpClient) { }








  // =========================================== ICI ON AJOUTE UNE NOUVELLE FERME

  ajouterFerme(user: any, nomferme: string, activiteferme: string, adresseferme: string, taille: string, file: any): Observable<any> {
    console.log("Service Ferme " + file)
    let data = new FormData();
    data.append("user", user);
    data.append("nomferme", nomferme);
    data.append("activiteferme", activiteferme);
    data.append("adresseferme", adresseferme);
    data.append("taille", taille);
    data.append("file", file)
    return this.http.post("http://localhost:8080/ferme/ajouter", data);
  }


 // Recuperation de toute les Produits
 lesFermes():Observable<any>{
  return this.http.get('http://localhost:8080/ferme/lister');
}
  

 // Recuperation de toute les Produits
 lesProduits():Observable<any>{
  return this.http.get('http://localhost:8080/produit/lister');
}

  // ICI ON RECUPERE LES FERMES DE L'UTILISATEURS CONNECTER AVEC ETAT
  mesFermes(id_ferme: any, etat: boolean): Observable<any> {
    return this.http.get(`http://localhost:8080/ferme/UserFermesEtat/${id_ferme}/${etat}`);
  }

  // ICI ON RECUPERE LES FERMES INFORMATIONS D'UNE FERME
  infoFermes(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/ferme/infoferme/${id_ferme}`);
  }

 // ICI ON RECUPERE LES FERMES PRODUCTIONS D'UNE FERME
 touteLesFerme(): Observable<any> {
  return this.http.get(`http://localhost:8080/ferme/lister`);
}

  // ICI ON RECUPERE LES FERMES PRODUCTIONS D'UNE FERME
  lesProductions(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/production/listerParFerme/${id_ferme}`);
  }

  // ICI ON RECUPERE LES PRODUITS D'UNE FERME
  lesProduitsParFermes(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParFerme/${id_ferme}`);
  }
  // ICI ON RECUPERE LES PRODUITS D'UNE FERME AVEC ETAT
  lesProduitsParFermesEtat(id_ferme: any, etat: boolean): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParFermes/${id_ferme}/${etat}`);
  }

  // ICI ON RECUPERE LES PRODUITS D'UNE FERME
  lesProduitsParId(idproduit: any): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParid/${idproduit}`);
  }

  // ICI ON SUPPRIME UN PRODUIT 
  supprimerProduit(produit: any, idproduit: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/produit/etat/${idproduit}`, produit)
  }

  // ICI ON SUPPRIME UNE FERME 
  supprimerFerme(produit: any, idferme: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/ferme/etat/${idferme}`, produit)
  }

  // RECUPERATION DES TYPE DE PRODUCTION

  lesTypesdeProduction(): Observable<any> {
    return this.http.get("http://localhost:8080/typeproduction/liste")
  }


  // ======================== AJOUTER UNE PRODUCTION

  ajouterProduction(production: any, idtype: any, idferme: any): Observable<any> {
    return this.http.post(`http://localhost:8080/production/ajouter/${idtype}/${idferme}`, production)
  }

  //================================================ FILTRAGE DES PRODUCTIONS

  fitrerProduction(status: any, id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/production/lesProdsParStatus/${status}/${id_ferme}`)
  }

  // =============================================== LES ENUMERATIONS
  enumStatus(): Observable<any> {
    return this.http.get("http://localhost:8080/production/enum");
  }


  // =============================================== LA LISTE DES HISTOS PAR FERME
  historiqueDesVentesParFermes(idferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/historique/lesHistoriqueParFerme/${idferme}`);
  }

  // =============================================== LA LISTE DES HISTOS PAR FERME
  supprimerHisto(idhisto: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/historique/supprimer/${idhisto}`);
  }

  // ================================================= LE NOMBRE TOTAL DES VENTES
  touteLesVentes(): Observable<any> {
    return this.http.get("http://localhost:8080/historique/lister");
  }
}
