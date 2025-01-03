import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/post.type';
import { PostService } from '../../service/post.service';

@Component({
	selector: 'app-post',
	standalone: true,
	imports: [],
	templateUrl: './post.component.html',
	styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
	postId: string | null = null;
	post: Post | null = null;

	constructor(private route: ActivatedRoute, private service: PostService) { }

	ngOnInit() {
		this.postId = this.route.snapshot.paramMap.get('id');

		if (this.postId) {
			this.service.getPostById(this.postId).subscribe(response => { this.post = response });
		}
	}
}
