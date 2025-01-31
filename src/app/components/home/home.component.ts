import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../types/post.type';
import { ContentLoaderServiceService } from '../../service/content-loader-service.service';
import { Content } from '../../types/Content.model';
import { PostComponent } from "../post/post.component";
import { HeaderComponent } from "../header/header.component";

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PostComponent, HeaderComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	posts: Content[] = [];

	constructor(private service: PostService, private contentService: ContentLoaderServiceService) { }

	ngOnInit() {
		this.contentService.getAllContents().subscribe(response => { this.posts = response });
		console.log(this.posts);
	}
}
