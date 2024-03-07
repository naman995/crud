import { PostService } from './../post.service';
import { Component } from '@angular/core';
import { Post } from '../post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  id!: number;
  post!: Post;
  address!: string; 
  constructor(
    public PostService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.PostService.getById(this.id).subscribe((data) => {
      this.post = data;
    });
  }
}
