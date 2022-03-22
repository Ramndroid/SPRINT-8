import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { UsersService } from '../../../services/users/users.service';
import { Subscription } from 'rxjs';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html'
})
export class NavBarLoginComponent implements OnInit, OnDestroy {

  isUserLoged: boolean = false;

  userName: string;

  private isUserLoged$: Subscription;

  constructor(
    public dialog: MatDialog,
    private users: UsersService,
    private router: Router
  ) {
    this.isUserLoged$ = new Subscription;
    this.userName = "";
  }

  ngOnInit(): void {
    this.isUserLoged$ = this.users.getIsUserLoged$()
      .subscribe(
        (isLoged: boolean) => {
          this.isUserLoged = isLoged;
          if (isLoged) {
            const result = this.users.getUserLoged()?.username;
            if (typeof result === 'string') {
              this.userName = result;
            }
          }
        }
      );

    this.loadSavedUser();

  }

  private loadSavedUser(): void {
    const savedUser: User | null = this.users.getCurrentSavedUser();
    if (savedUser !== null) {
      const { username, email, password } = savedUser;
      const users: User = {
        username: username,
        email: email,
        password: password
      }
      this.users.log(users);
    } else {
    }
  }

  ngOnDestroy(): void {
    this.isUserLoged$.unsubscribe();
  }

  openLogInDialog() {
    this.openDialog(false);

  }

  openSignUpDialog() {
    this.openDialog(true);
  }

  private openDialog(isNewUser: boolean) {
    this.dialog.open(UserDialogComponent, {
      data: { newUser: isNewUser }
    });
  }

  alertUserInfo() {
    const user = this.users.getUserLoged();
    const message: string = `
    Name: ${user?.username}
    Email: ${user?.email}
    Password: ${user?.password}`;
    alert(message);
  }

  logOut() {
    this.users.logOut();
    this.router.navigate(['/']);
  }

}
