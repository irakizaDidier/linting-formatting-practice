import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserListComponent, UserDetailComponent],
})
export class AppComponent {
  title = 'linting-formatting-practice';
  selectedUser: { name: string; age: number; email: string } | undefined;

  constructor(private userService: UserService) {}

  onUserSelected(user: { name: string; age: number; email: string }) {
    this.selectedUser = user;
  }
}
