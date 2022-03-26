import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
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
    const user: User | null | undefined = this.users.getUserLoged();
    if (user !== null && user !== undefined) {
      const { username, email, password } = user;
      this.username = username;
      this.email = email;
      this.passw = password;
    }
    
  }
}
