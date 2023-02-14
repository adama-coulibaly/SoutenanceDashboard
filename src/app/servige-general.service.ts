import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServigeGeneralService {







  public showValue = new BehaviorSubject<any>(0);
  public showValue$ = this.showValue.asObservable();
// =============================================================POUR LA VALEUR DU PANIER
public showImage = new BehaviorSubject<any>(null);
public showImage$ = this.showImage.asObservable();
  constructor() { }

  
  ionViewDidEnter(){
    
  }
}
