import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor(private http:HttpClient) { }



    // ICI ON RECUPERE LES PRODUITS D'UN UTILISATEUR
    lesProduitsParFermes(iduser:any,etat:boolean):Observable<any>{
      return this.http.get(`http://localhost:8080/panier/panierParUser/${iduser}/${etat}`);
    }


     // ICI ON RECUPERE LES PRODUITS D'UN UTILISATEUR
     totalQuantite(iduser:any):Observable<any>{
      return this.http.get(`http://localhost:8080/panier/panierUserTotal/${iduser}`);
    }


        // ICI ON SUPRIME UN PRODUITS DU PANIER D'UN UTILISATEUR
        supprimerProduit(panier:any,produit:any,user:any):Observable<any>{
          return this.http.delete(`http://localhost:8080/panier/supprimer/${panier}/${produit}/${user}`);
        }
    
      // ICI ON COMMANDE UN PRODUITS
      Commande(commande:any,iduser:any):Observable<any>{
        console.log("rrr "+commande.modepayement)
        return this.http.post(`http://localhost:8080/commande/ajouter/${iduser}`,commande)
      }
}
