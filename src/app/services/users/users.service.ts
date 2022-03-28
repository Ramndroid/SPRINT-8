import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private registeredUsers: User[];

  private currentUser?: User | null;

  private isUserLoged$: Subject<boolean>;

  constructor(
    private storage: StorageService
  ) {
    this.registeredUsers = [];
    this.currentUser = null;
    this.isUserLoged$ = new Subject();
    this.getUsersFromLocalStorage();
    this.getCurrentUserFromLocalStorage();
  }

  private getUsersFromLocalStorage() {
    const users = this.storage.getFromLocalStorage(StorageService.USERS);
    if (users != null) {
      const result: User[] = JSON.parse(users);
      this.registeredUsers = [...result];
    }
  }

  private getCurrentUserFromLocalStorage() {
    const user = this.storage.getFromLocalStorage(StorageService.CURRENTUSER);
    if (user != null) {
      const result: User = JSON.parse(user);
      this.log(result);
      this.currentUser = result;
    }
  }

  getCurrentSavedUser(): User | null {
    const user = this.storage.getFromLocalStorage(StorageService.CURRENTUSER);
    if (user != null) {
      const result: User = JSON.parse(user);
      return result;
    }
    return null;
  }

  isRegisteredUser(): boolean {
    const user = this.storage.getFromLocalStorage(StorageService.CURRENTUSER);
    if (typeof user === 'string') {
      return true;
    } else {
      return false;
    }
  }

  getIsUserLoged$(): Observable<boolean> {
    return this.isUserLoged$.asObservable();
  }

  getUserLoged(): User | null | undefined {
    return this.currentUser;
  }

  add(newUser: User): boolean {
    const user = this.existUser(newUser.email);
    if (user === null) {
      this.registeredUsers.push(newUser);
      const saveToLocalStorage = this.storage.saveToLocalStorage(StorageService.USERS, this.registeredUsers);
      console.log(saveToLocalStorage);
      if (saveToLocalStorage) {
        this.currentUser = newUser;
        this.saveCurrentUser();
        this.isUserLoged$.next(true);
      } else {
        this.currentUser = null;
        this.registeredUsers.pop();
      }
      return saveToLocalStorage;
    } else {
      return false;
    }
  }

  log(user: User): number {
    const { email, password } = user;
    const existUser = this.existUser(email);
    if (existUser === null) { // the user doesn't exists
      return 1;
    } else {
      if (existUser.password !== password) { // Incorrect password
        return 2;
      } else { // the user exists
        this.currentUser = existUser;
        this.isUserLoged$.next(true);
        this.saveCurrentUser();
        return 0;
      }
    }
  }

  private existUser(userEmail: string): User | null {
    const result = this.registeredUsers.filter(user => user.email === userEmail);
    if (result.length > 0) {
      return result[0];
    }
    return null;
  }

  private saveCurrentUser(): void {
    if (this.currentUser !== null && this.currentUser !== undefined) {
      this.storage.saveToLocalStorage(StorageService.CURRENTUSER, this.currentUser);
    }
  }

  logOut(): void {
    this.isUserLoged$.next(false);
    this.currentUser = null;
    this.storage.eraseFromLocalStorage(StorageService.CURRENTUSER);
  }

}
