import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDialogComponent } from './components/dialogs/user-dialog/user-dialog.component';
import { UsersService } from './services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private users: UsersService,
    public dialog: MatDialog
  ) { }

  redirect(flag: boolean): void {
    if (!flag) {
      this.router.navigate(['/']);
      this.dialog.open(UserDialogComponent, {
        data: { newUser: false }
      });
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const registered = this.users.isRegisteredUser();
    this.redirect(registered);
    return registered;
  }

}
