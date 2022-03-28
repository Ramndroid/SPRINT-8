import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './services/users/users.service';
import { LogDialogComponent } from './components/dialogs/log-dialog/log-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private users: UsersService,
    public dialog: MatDialog
  ) { }

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const registered = this.getResponse();
    this.redirect(registered, state);
    return registered;
  }

  private getResponse(): boolean {
    return this.users.isRegisteredUser();
  }

  private redirect(flag: boolean, state: RouterStateSnapshot): void {
    if (!flag) {
      this.router.navigate(['/']);
      this.dialog.open(LogDialogComponent, { data: { newUser: false, accesTo: state.url } });
    }
  }

}
