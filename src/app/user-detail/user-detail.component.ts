import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="user">
      <h3>User Details</h3>
      <p>Name: {{ user.name }}</p>
      <p>Age: {{ user.age }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #ccc;
        padding: 10px;
        margin-top: 10px;
      }
    `,
  ],
})
export class UserDetailComponent {
  @Input() user: { name: string; age: number; email: string } | undefined;
}
