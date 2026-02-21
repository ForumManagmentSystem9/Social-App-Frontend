import {Component, Input, signal} from '@angular/core';
import {MatCard, MatCardAvatar} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {Card} from 'primeng/card';
import {Avatar} from 'primeng/avatar';
import {ButtonDirective} from 'primeng/button';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-status-update-component',
  standalone: true,
  imports: [
    MatCard,
    MatCardAvatar,
    MatIcon,
    Card,
    Avatar,
    ButtonDirective,
    MatIconButton
  ],
  templateUrl: './status-update-component.html',
})
export class StatusUpdateComponent {
  avatar = signal({ "id": 1, "url": "https://i.pravatar.cc/150?img=40" })
}
