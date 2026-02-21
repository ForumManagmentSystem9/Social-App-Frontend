import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import {SidebarService} from '../services/sidebar';
import {ButtonDirective} from 'primeng/button';
import {PrimeTemplate} from 'primeng/api';
import {Drawer} from 'primeng/drawer';

@Component({
  selector: 'app-side-nav-component',
  standalone: true,
  imports: [
    CommonModule,
    Avatar,
    ButtonDirective,
    Badge,
    PrimeTemplate,
    Drawer
  ],
  templateUrl: './side-nav-component.html',
  styleUrl: './side-nav-component.css'
})
export class SideNavComponent {

  constructor(public sidebar: SidebarService) {}

  isExpanded = true;
  activeNav = 'home';

  navItems = [
    { id: 'feed', icon: 'pi pi-home', label: 'Feed', badge: null },
    { id: 'search', icon: 'pi pi-search', label: 'Search', badge: null },
    { id: 'create', icon: 'pi pi-plus-circle', label: 'Create', badge: null },
    { id: 'notifications', icon: 'pi pi-bell', label: 'Alerts', badge: 12 },
    { id: 'messages', icon: 'pi pi-comments', label: 'Messages', badge: 5 },
    { id: 'communities', icon: 'pi pi-users', label: 'Communities', badge: null },
    { id: 'saved', icon: 'pi pi-star', label: 'Saved', badge: null },
    { id: 'profile', icon: 'pi pi-user', label: 'Profile', badge: null },
  ];
}
