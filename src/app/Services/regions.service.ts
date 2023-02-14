import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../Models/models/commentaire';
import { Regions } from '../Models/models/regions.model';


const API_URL = 'http://localhost:8080/projet/odk/Regions/';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http:HttpClient) { }

  // Recuperation de toute les Regions
   getRegions():Observable<any>{
    return this.http.get(API_URL+'liste');
  }

//  Recuperation d'une seule REGIONS
  detailsRegion(id_regions:number):Observable<any>{
    console.log("Mon ID "+id_regions)
    return this.http.get<any>(`http://localhost:8080/projet/odk/Regions/uneRegion/${id_regions}`)
  }
  //LES COMMENTAIRES D'UNE REGION
  
  RegionsCommentaire(id_regions:number):Observable<any>{
    console.log("Mon ID REGIONS "+id_regions)
    return this.http.get(`http://localhost:8080/projet/odk/Commentaire/RegionsCommentaire/${id_regions}`);
  }

  // FAIRE UN COMMENTAIRES

  FaireCommentaires(commentaire:any):Observable<any>{
    return this.http.post(`http://localhost:8080/projet/odk/Commentaire/creer/${commentaire.id_users}/${commentaire.id_regions}`,commentaire);
  }

// AJOUTER UNE REGIONS ICI

AjouterRegion(id_pays:any, nomregions:string,coderegion:string,activiterregion:string,superficieregion:string,languemregion:string,description:string,file:any):Observable<any>{
  let data =new FormData();
  data.append("id_pays", id_pays);
  data.append("coderegion",coderegion);
  data.append("nomregions",nomregions);
  data.append("activiterregion",activiterregion);
  data.append("superficieregion",superficieregion);
  data.append("languemregion",languemregion);
  data.append("description",description);
  data.append("file",file)
  return this.http.post(`http://localhost:8080/projet/odk/Regions/ajouterRegion`,data);
}

//  ON RECUPER TOUS LES UTILISATEURS

mesUsers():Observable<any>{
  return this.http.get<any>("http://localhost:8080/projet/odk/User/lesUser")
}

// ICI LE NOMBRE TOTAL DES UTILISATEUR
nombreUsers():Observable<any>{
  return this.http.get<any>("http://localhost:8080/projet/odk/User/nbreUser")
}

// ICI ON RECUPERE LES HABITANTS D'UNE REGION

lesHABITANTS(id_Regions:any):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/projet/odk/Habitants/listerParRegion/${id_Regions}`);
}

// ICI ON RECUPERE LES HABITANTS D'UNE REGION

ModifierRegions(regions:Regions, id_Regions:any):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/projet/odk/Regions/modifier/${id_Regions}`);
}


}
