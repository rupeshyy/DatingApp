import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    model: any = {};

    constructor(public accountservice: AccountService,
       private router: Router,
       private toastr: ToastrService){ }

    ngOnInit(): void{
      //this.getCurrentUser();
    }

    login() {
      this.accountservice.login(this.model).subscribe({
        next: _ => this.router.navigateByUrl('/members'),
        error: error => this.toastr.error(error.error)
       // error: error => console.log(error)     

      })
    }

    logout(){
      this.accountservice.logout();
      this.router.navigateByUrl('/')

    }
}
