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

  deuxFormation():Observable<any>{
    return this.http.get("http://localhost:8080/formation/deuxFormation")
  }

  // =========================================== UNE SEULE PRODUCTIONS ===================

  lesFormationsParId(idformation:any):Observable<any>{
    return this.http.get(`http://localhost:8080/formation/listerId/${idformation}`);
  }
}
