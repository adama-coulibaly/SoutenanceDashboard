import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {

  constructor(private http:HttpClient) { }

  // Recuperation de toute les Produits
   lesProduits():Observable<any>{
    return this.http.get('http://localhost:8080/produit/lister');
  }

    // Recuperation de toute les Produits par categories
    lesProduitsParCategories(idcategoris:number):Observable<any>{
      return this.http.get(`http://localhost:8080/produit/listerParCategorie/${idcategoris}`);
    }
  
    // RECUPERER MES PRODUITS PAR LEURS ID
    lesProduitsParID(idcategoris:number):Observable<any>{
      return this.http.get(`http://localhost:8080/produit/listerParid/${idcategoris}`);
    }

    //  AJOUTER UN PRODUIT AU PANIER
    ajouterAuPanier(panier:any,produit:any,user:any):Observable<any>{
      return this.http.post(`http://localhost:8080/panier/ajouter/${produit}/${user}`,panier)
    }

     //  AJOUTER UN PRODUIT AU PANIER
     ajouterAuPanierS(panier:any,produit:any,user:any):Observable<any>{
      return this.http.post(`http://localhost:8080/panier/modifierquantite/${produit}/${user}`,panier)
    }
    
}
