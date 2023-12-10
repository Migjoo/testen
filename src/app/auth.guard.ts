// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Umleitung zur Login-Seite
      return false;
    }
  }

  private isUserAuthenticated(): boolean {
    const username = 'migjo';
    const password = 'matic';
  
    const enteredUsername = localStorage.getItem('enteredUsername');
    const enteredPassword = localStorage.getItem('enteredPassword');
  
    return enteredUsername === username && enteredPassword === password;
  }
}
