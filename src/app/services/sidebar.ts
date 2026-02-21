import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebarVisible = false;

  toggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  open() {
    this.sidebarVisible = true;
  }

  close() {
    this.sidebarVisible = false;
  }
}
