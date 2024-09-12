import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  styleUrls: ['./user-detail.component.css'],
  templateUrl: './user-detail.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class UserDetailComponent {
  @Input() user: { name: string; age: number; email: string } | undefined;
}
