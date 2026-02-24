import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {

  drawer: any;
  screenIsMobile = window.innerWidth < 768;

  constructor() {
    window.addEventListener('resize', () => {
      const wasMobile = this.screenIsMobile;

      // Update screen size state
      this.screenIsMobile = window.innerWidth < 768;

      // MOBILE → DESKTOP
      if (wasMobile && !this.screenIsMobile) {
        // Desktop sidebar must ALWAYS be open
        if (this.drawer) this.drawer.open();
      }

      // DESKTOP → MOBILE
      if (!wasMobile && this.screenIsMobile) {
        // Mobile sidebar must start CLOSED
        if (this.drawer) this.drawer.close();
      }
    });
  }

  register(drawer: any) {
    this.drawer = drawer;
  }

  toggle() {
    if (this.drawer && this.screenIsMobile) {
      this.drawer.toggle();
    }
  }

  close() {
    if (this.drawer) {
      this.drawer.close();
    }
  }
}
