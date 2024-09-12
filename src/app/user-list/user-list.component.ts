import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./user-list.component.css'],
  templateUrl: './user-list.component.html',
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
