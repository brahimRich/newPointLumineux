import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

  const storedRolesJSON = localStorage.getItem('userRoles');
  if (storedRolesJSON !== null) {
    const storedRoles = JSON.parse(storedRolesJSON);
    console.log("55555 552"+storedRoles[0].name);
    const requiredPermissions = route.data['requiredPermissions'];
    console.log("test "+requiredPermissions)
    const hasRequiredPermissions = requiredPermissions.every((permission: string) => {
      // Vérifier si au moins un des objets dans storedRoles a un nom correspondant à la permission requise
      return storedRoles.some((role: any) => role.name === permission);
    });
        console.log("test 2"+hasRequiredPermissions)
    if (hasRequiredPermissions) {
      return true; // Autorise l'accès à la page
    }
  }
  this.router.navigate(['/error']);
  return false;
  }
  
}
