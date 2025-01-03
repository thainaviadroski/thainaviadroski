import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../types/post.type';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	posts: Post[] = [];

	constructor(private service: PostService) { }

	ngOnInit() {
		this.service.getPostAll().subscribe(response => { this.posts = response });
	}
}
