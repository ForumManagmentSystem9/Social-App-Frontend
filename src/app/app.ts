import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostComponent} from './post-component/post-component';
import {PostComponentList} from './post-component-list/post-component-list';
import {StatusUpdateComponent} from './status-update-component/status-update-component';
import {StoryComponent} from './story-component/story-component';
import {SideNavComponent} from './side-nav-component/side-nav-component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {NavComponent} from './nav-component/nav-component';
import {FriendRequestComponent} from './friend-request-component/friend-request-component';
import {PrimeNG} from 'primeng/config';
import {RightSideNavComponent} from './right-side-nav-component/right-side-nav-component';

@Component({
  selector: 'app-root',
  imports: [
    PostComponentList,
    StatusUpdateComponent,
    StoryComponent,
    SideNavComponent,
    NavComponent,
    FriendRequestComponent,
    RightSideNavComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  protected readonly title = signal('socialMedia');

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
