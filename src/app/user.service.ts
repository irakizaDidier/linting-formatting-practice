import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: { name: string; age: number }) {
    this.users.push(user);
  }
}
