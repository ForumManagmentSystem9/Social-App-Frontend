import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostComponent} from './post-component/post-component';
import {PostComponentList} from './post-component-list/post-component-list';
import {StatusUpdateComponent} from './status-update-component/status-update-component';
import {StoryComponent} from './story-component/story-component';
import {SideNavComponent} from './side-nav-component/side-nav-component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {NavComponent} from './nav-component/nav-component';
import {FriendRequestComponent} from './friend-request-component/friend-request-component';

@Component({
  selector: 'app-root',
  imports: [
    PostComponentList,
    StatusUpdateComponent,
    StoryComponent,
    SideNavComponent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    NavComponent,
    FriendRequestComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('socialMedia');
}
