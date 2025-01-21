import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../types/Content.model';

@Component({
	selector: 'app-post',
	standalone: true,
	imports: [],
	templateUrl: './post.component.html',
	styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
	@Input() post?: Content;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		console.log(this.post);

	}
}
