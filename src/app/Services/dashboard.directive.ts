import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appDashboard]'
})
export class DashboardDirective {

  constructor(private http:HttpClient) { }


 

}
