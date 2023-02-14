import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  const API_URL = 'http://localhost:8080/theme/';
@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

 
  constructor(private http: HttpClient) { }


  // LA METHODE QUI NOUS PERMET DE RECUPERER TOUS LES THEMES
  toutLesThemes(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/theme/liste');
  }

  //  CETTE METHODE NOUS PERMET D'AJOUTER UN THEME

  posterTheme(theme:any,user_id:any):Observable<any>{
    return this.http.post(`http://localhost:8080/theme/ajouter/${user_id}`,theme);
  }

  commenterTheme(commentaire:any,idtheme:any,iduser:any){
    return this.http.post(`http://localhost:8080/commentaire/ajouter/${idtheme}/${iduser}`,commentaire)
  }
}
