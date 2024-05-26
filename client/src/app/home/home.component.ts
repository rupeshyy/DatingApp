import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registermode = false;
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getUsers();
  }

  registerToggle(){
    this.registermode = !this.registermode;
  }

  getUsers(){
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete:() => console.log('Request has completed')
    })
  }

  cancelRegisterMode(event: boolean){
    this.registermode = event;
  }
}
