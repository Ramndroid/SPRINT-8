import { Component } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  username: string = "";

  email: string = "";

  passw: string = "";

  constructor(
    private users: UsersService
  ) {
    const { username, email, password } = this.users.getUserLoged()!;
    this.username = username;
    this.email = email;
    this.passw = password;
  }
}
