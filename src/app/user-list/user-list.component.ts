import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users" (click)="selectUser(user)">
        {{ user.name }} ({{ user.age }})
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
        cursor: pointer;
        background-color: #f0f0f0;
        padding: 5px;
      }
      li:hover {
        background-color: #e0e0e0;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  users: { name: string; age: number; email: string }[] | undefined;

  @Output() userSelected = new EventEmitter<{
    name: string;
    age: number;
    email: string;
  }>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  selectUser(user: { name: string; age: number; email: string }) {
    this.userSelected.emit(user);
  }
}
