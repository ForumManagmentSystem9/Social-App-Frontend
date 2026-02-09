import {Component, computed, signal} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-component',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './side-nav-component.html',
  styleUrl: './side-nav-component.css'
})
export class SideNavComponent {
  collapsed = signal(false);

  // change width when collapsed
  width = computed(() => this.collapsed() ? '70px' : '250px');

  // avatar size for animation
  avatarSize = computed(() => this.collapsed() ? '40' : '80');
}
