import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailForumServicesService {

  constructor(private http: HttpClient) { }

  // ICI ON RECUPERE LES COMMENTAIRES D'UN SEUL THEME

  RegionsCommentaire(id_theme:number):Observable<any>{
    return this.http.get(`http://localhost:8080/commentaire/listepatheme/${id_theme}`);
  }
}
