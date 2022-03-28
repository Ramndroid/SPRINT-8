import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html'
})
export class UserDialogComponent implements OnInit {

  username: string = "";

  email: string = "";

  passw: string = "";

  constructor(
    private users: UsersService,
    private overlay: OverlayContainer
  ) {
    const user: User | null | undefined = this.users.getUserLoged();
    if (user !== null && user !== undefined) {
      const { username, email, password } = user;
      this.username = username;
      this.email = email;
      this.passw = password;
    }
  }
  ngOnInit(): void {
    this.overlay.getContainerElement().classList.add("my-material-dialog");
  }
}
