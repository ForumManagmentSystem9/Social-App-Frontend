import { Component } from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {ButtonDirective} from 'primeng/button';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-right-side-nav-component',
  imports: [
    Avatar,
    ButtonDirective,
    InputText
  ],
  templateUrl: './right-side-nav-component.html',
  styleUrl: './right-side-nav-component.css',
})
export class RightSideNavComponent {
  likes = [
    { user: 'Sarah Anderson', action: 'liked your post', avatar: '🎨', time: '2m' },
    { user: 'Tech Insider', action: 'reacted ❤️', avatar: '💻', time: '10m' },
    { user: 'Creative Hub', action: 'liked your comment', avatar: '✨', time: '1h' }
  ];

  friendRequests = [
    { name: 'Mike Johnson', mutual: 12, avatar: '🧑' },
    { name: 'Emma Stone', mutual: 5, avatar: '👩' },
    { name: 'Alex Brown', mutual: 8, avatar: '🧑‍💻' }
  ];

  contacts = [
    { name: 'John Doe', status: 'online', avatar: '🟢' },
    { name: 'Lisa Ray', status: 'away', avatar: '🟡' },
    { name: 'David Kim', status: 'offline', avatar: '⚪' }
  ];
}
