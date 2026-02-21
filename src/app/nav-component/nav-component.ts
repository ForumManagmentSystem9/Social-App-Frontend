import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Avatar} from 'primeng/avatar';
import {ButtonDirective} from 'primeng/button';
import {SidebarService} from '../services/sidebar';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [
    Avatar,
    ButtonDirective
  ],
  templateUrl: './nav-component.html'
})
export class NavComponent {
  constructor(public sidebar: SidebarService) {}
  toggleMenu() {
    this.sidebar.toggle();
  }
}
