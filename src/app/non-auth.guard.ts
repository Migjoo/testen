// non-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isUserAuthenticated()) {
      // Benutzer ist bereits authentifiziert, leite ihn zur Hauptseite weiter
      this.router.navigate(['/']);
      return false;
    } else {
      // Erlaube den Zugriff auf die Login-Seite
      return true;
    }
  }

  private isUserAuthenticated(): boolean {
    const enteredUsername = localStorage.getItem('enteredUsername');
    const enteredPassword = localStorage.getItem('enteredPassword');
  
    return !!enteredUsername && !!enteredPassword;
  }
}
