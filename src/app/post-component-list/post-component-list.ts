import {Component, OnInit} from '@angular/core';
import {PostComponent} from '../post-component/post-component';

import postData from '../../assets/data/post.json';

@Component({
  selector: 'app-post-component-list',
  standalone: true,
  imports: [
    PostComponent
  ],
  templateUrl: './post-component-list.html',
})
export class PostComponentList implements OnInit {
  posts: any[] = [];

  ngOnInit() {
    // Access the posts array from the JSON structure
    this.posts = postData.posts;
    console.log('Posts loaded:', this.posts);
  }
}
