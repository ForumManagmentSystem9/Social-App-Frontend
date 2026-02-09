import {Component, Input, signal} from '@angular/core';
import {MatCard, MatCardAvatar} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-status-update-component',
  standalone: true,
  imports: [
    MatCard,
    MatCardAvatar,
    MatIcon
  ],
  templateUrl: './status-update-component.html',
})
export class StatusUpdateComponent {
  avatar = signal({ "id": 1, "url": "https://i.pravatar.cc/150?img=40" })
}
