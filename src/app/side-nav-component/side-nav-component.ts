import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { StoryComponent } from '../story-component/story-component';
import { StatusUpdateComponent } from '../status-update-component/status-update-component';
import { PostComponentList } from '../post-component-list/post-component-list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav-component',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltip,
    MatSidenav,
    MatSidenavContent,
    StoryComponent,
    StatusUpdateComponent,
    PostComponentList,
    MatSidenavContainer,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-nav-component.html',
  styleUrl: './side-nav-component.css'
})
export class SideNavComponent implements AfterViewInit {

  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(public sidebar: SidebarService) {}

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

  sidebarVisible = false;

  ngAfterViewInit() {
    this.sidebar.register(this.drawer);

    // Ensure correct initial state
    if (!this.sidebar.screenIsMobile) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      const wasMobile = this.sidebar.screenIsMobile;
      this.sidebar.screenIsMobile = window.innerWidth < 768;

      // MOBILE → DESKTOP
      if (wasMobile && !this.sidebar.screenIsMobile) {
        this.sidebarVisible = false;
        this.drawer.open(); // desktop always open
      }

      // DESKTOP → MOBILE
      if (!wasMobile && this.sidebar.screenIsMobile) {
        this.sidebarVisible = false;
        this.drawer.close(); // mobile starts closed
      }
    });
  }


  onNavClick(id: string) {
    this.activeNav = id;

    // Close only on mobile
    if (this.sidebar.screenIsMobile) {
      this.sidebarVisible = false;
      this.drawer.close();
    }
  }
}
