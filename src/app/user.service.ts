import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Jane', age: 25, email: 'jane@example.com' },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: { name: string; age: number; email: string }) {
    this.users.push(user);
  }
}
