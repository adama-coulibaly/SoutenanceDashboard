import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotDePasseOublierService {

  constructor(private http:HttpClient) { }

// RENVOYER LE CODE D'ENVOI
  verierEmail(email:any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/auth/resetPassword/${email}`,email);
  }

// NOUVEAU MOT DE PASSE
nouveauMDP(nouveau:any):Observable<any>{
  return this.http.post(`http://localhost:8080/api/auth/changePassword/`,nouveau);
}

}
