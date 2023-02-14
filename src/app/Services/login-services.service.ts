import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      usernameOrEmail,
      password
    }, httpOptions);
  }



  register(user:any): Observable<any> {
    return this.http.post("http://localhost:8080/api/auth/signup",user);
  }


  registerO(nom:string,prenom:string,username:string,email:string,password:string,adresse:string,idStatut:any): Observable<any> {
    const user = {
      "nom":nom,
      "prenom":prenom,
      "username":username,
      "email":email,
      "password":password,
      "adresse":adresse
    }
    return this.http.post(`http://localhost:8080/api/auth/signup/${idStatut}`,user);
  }


  lesStatus():Observable<any>{
      return this.http.get("http://localhost:8080/api/auth/statusUser")
  }

}
