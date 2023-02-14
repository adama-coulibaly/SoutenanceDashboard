import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../Services/token-storage.service';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: any;
  monStatus: any;

  constructor(private router: Router,private tokenStorage:TokenStorageService) {}

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
    if(this.user.id != null ){
     console.log(this.user.statusUser.idstatus)
     this.monStatus = this.user.statusUser.idstatus
    }
  }




   // =======================================================Popopup de profile 
  //  async presentPopover(ev: any) {
  //   const popover = await this.popoverCtrl.create({
  //     component: CompteUserComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }


  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(): void {
    this.tokenStorage.signOut();
        // this.router.navigateByUrl('bottom-bar/accueil')
    window.location.reload();
  }
}
