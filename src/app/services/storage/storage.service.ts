import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // LocalStorage
  static USERS            : string = "users";
  static CURRENTUSER      : string = "user";
  
  constructor() { }

  getFromLocalStorage(key: string): string | null {
    const data = window.localStorage.getItem(key);
    return data;
  }

  saveToLocalStorage(key: string, value: object | string | number | boolean):boolean {
    if (typeof value === "object") {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } else if (typeof value === "string") {
      window.localStorage.setItem(key, value);
      return true;
    } else if (typeof value === "number") {
      const parseValue = value.toString();
      window.localStorage.setItem(key, parseValue);
      return true;
    } else if (typeof value === "boolean") {
      window.localStorage.setItem(key, value ? "true" : "false");
      return true;
    } else {
      return false;
    }   
  }

  eraseFromLocalStorage(key: string) {
    window.localStorage.removeItem(key);
  }
}
