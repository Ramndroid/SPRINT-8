import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-log-dialog',
  templateUrl: './log-dialog.component.html',
  styleUrls: ['./log-dialog.component.scss']
})
export class LogDialogComponent implements OnInit {

  title: string;

  signupForm: FormGroup;

  loginForm: FormGroup;

  fieldTextType: boolean;

  isNewUser: boolean;

  alertNewUserAlreadyExists: boolean;

  alertLogUser: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { newUser: boolean, accesTo: string },
    private _builderSignUp: FormBuilder,
    private _builderLogIn: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<LogDialogComponent>,
    private users: UsersService
  ) {
    this.title = "";
    this.fieldTextType = false;
    this.isNewUser = false;
    this.alertNewUserAlreadyExists = false;
    this.alertLogUser = 0;

    this.signupForm = this._builderSignUp.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });

    this.loginForm = this._builderLogIn.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.isNewUser = this.data.newUser;
    this.setTitle();
  }

  viewSignUp(): void {
    this.isNewUser = true;
    this.setTitle();
  }

  viewLogIn(): void {
    this.isNewUser = false;
    this.setTitle();
    this.fieldTextType = false;
  }

  private setTitle(): void {
    if (this.isNewUser) {
      this.title = "create your account";
    } else {
      this.title = "sign in";
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  createNewUser(user: User): void {
    if (this.signupForm.valid) {
      const result = this.users.add(user);
      if (result) {
        this.alertNewUserAlreadyExists = false;
        this.closeDialog();
      } else {
        this.alertNewUserAlreadyExists = true;
      }
    }
  }

  logUser(user: User): void {
    if (this.loginForm.valid) {
      const result = this.users.log(user);
      if (result == 0) {
        this.closeDialog();
      } else {
        this.alertLogUser = result;
      }
    }
  }

  private closeDialog(): void {
    this.dialogRef.close();
    if (this.data.accesTo !== undefined) {
      this.router.navigate([this.data.accesTo]);
    }
  }
}
