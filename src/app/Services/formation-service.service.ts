import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private http:HttpClient) { }

  // =========================================== RECUPERATION DE TOUTE LES FORMATIONS ============================
  mesFormations():Observable<any>{
    return this.http.get("http://localhost:8080/formation/lister")
  }

    // =========================================== RECUPERATION DE TOUTE LES FORMATIONS ============================
    mesFormationsParEtat(etat:any):Observable<any>{
      return this.http.get(`http://localhost:8080/formation/listerParEtat/${etat}`)
    }


  deuxFormation():Observable<any>{
    return this.http.get("http://localhost:8080/formation/deuxFormation")
  }

  // =========================================== UNE SEULE PRODUCTIONS ===================

  lesFormationsParId(idformation:any):Observable<any>{
    return this.http.get(`http://localhost:8080/formation/listerId/${idformation}`);
  }

   // ICI ON SUPPRIME UNE FORMATION 
   activerDesactiver(formation: any, idformation: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/formation/etat/${idformation}`, formation)
  }

  // ================================= AJOUTER UNE FORMATION ==================================
  ajouterFormation(id:any,urlformation:any,description:any,dureformation:any,titreforlation:any,file:any):Observable<any>{
    let data = new FormData();   
    data.append("file",file);
    data.append("user",id);
    data.append("urlformation",urlformation);
    data.append("description",description);
    data.append("titreforlation",titreforlation);
    data.append("file",file);
     return this.http.post("http://localhost:8080/formation/ajouter",data)
  }

  // ======================================= SUPPRIMER UNE FORMATION  =====================================
supprimerFormation(idformation:any):Observable<any>{
  return this.http.delete(`http://localhost:8080/formation/supprimer/${idformation}`)
}

}
