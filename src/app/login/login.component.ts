import { Component,  ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(event: Event) {
    event.preventDefault();
  
    const isAuthentic = this.authenticate(this.username, this.password);
  
    if (isAuthentic) {
      // Speichere im Local Storage
      localStorage.setItem('enteredUsername', this.username);
      localStorage.setItem('enteredPassword', this.password);
  
      // Setze das Authentifizierungsflag im Local Storage
      localStorage.setItem('authenticated', 'true');
  
      // Navigiere zur geschützten Seite
      this.router.navigate(['']);
    } else {
  alert("falsches pw oder username") ;
   }
  }
  
  private authenticate(username: string, password: string): boolean {
    const staticUsername = 'migjo';
    const staticPassword = 'matic';
  
    return username === staticUsername && password === staticPassword;
  }
}
