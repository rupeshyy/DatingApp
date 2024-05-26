import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    model: any = {};

    constructor(public accountservice: AccountService){}

    ngOnInit(): void{
      //this.getCurrentUser();
    }

    login() {
      this.accountservice.login(this.model).subscribe({
        next: response => {
          console.log(response)
        },
        error: error => console.log(error)
      })
    }

    logout(){
      this.accountservice.logout();
    }
}
