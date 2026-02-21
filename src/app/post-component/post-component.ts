import {Component, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {Card} from 'primeng/card';
import {Avatar} from 'primeng/avatar';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    Card,
    Avatar,
    ButtonDirective,
  ],
  templateUrl: './post-component.html',
})
export class PostComponent {
  @Input() post: any;
}
