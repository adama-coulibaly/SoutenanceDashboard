import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})export class UserService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  toutLesUtilisateur(): Observable<any> {
    return this.http.get("http://localhost:8080/api/auth/tousLesUser");
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  
  getUsers(): Observable<any> {
    return this.http.get(API_URL + 'utilisateurs', { responseType: 'text' });
  }

  updateAvatar(iduser:any,file:any):Observable<any>{
    console.log("Service "+file)
    let data =new FormData();
    data.append("file",file)
    return this.http.patch<any>(`http://localhost:8080/api/auth/modifierAvatar/${iduser}`,data)
  }

  updateUsers(iduser:any,donne:any):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/auth/modifier/${iduser}`,donne)
  }

  getUnUser(iduser:any){
      return this.http.get(`http://localhost:8080/api/auth/user/${iduser}`)
  }

  
  // ICI ON BANI UN USER
  banirUser(user: any, id: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/api/auth/banirUser/${id}`, user)
  }
  
}