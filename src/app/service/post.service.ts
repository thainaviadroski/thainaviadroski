import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(private http: HttpClient) { }


	getPostById(id: string): Observable<Post | null> {
		return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
	}

	getPostAll(): Observable<Post[]> {
		return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
	}

}
