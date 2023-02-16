import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './Services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dashboardControleFacile';
  user: any;
  constructor(private tokenStorage:TokenStorageService,private route:Router ){}

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    console.log("je suis "+this.user.id)
    if(this.user.id != null){
      this.route.navigate(['/dashboard']);
    }
    else{
      this.route.navigateByUrl("connexion-inscription")

    }

  }
}
