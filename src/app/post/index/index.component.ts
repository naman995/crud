import { PostService } from './../post.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  posts: any[] = [];
  constructor(public PostService: PostService) {}
  ngOnInit() {
    this.PostService.getAll().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  deletePost(id: number) {
    this.PostService.delete(id).subscribe((data) => {
      this.posts = this.posts.filter((p) => p.id !== id);
      alert('Post deleted successfully!');
    });
  }
}
