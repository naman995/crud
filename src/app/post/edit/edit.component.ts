import { PostService } from './../post.service';
import { Component } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from '../post';
import { get } from 'http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  id!: number;
  post!: any;
  form!: FormGroup;
  constructor(
    public PostService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.PostService.getById(this.id).subscribe((data: Post) => {
      this.post = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      body: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    this.PostService.update(this.id, this.form.value).subscribe((res) => {
      alert('Data updated successfully!');
      this.router.navigateByUrl('post/index');
    });
  }
}
