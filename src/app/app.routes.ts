import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'detail', component: DetailComponent },
	{ path: 'post/:id', component: PostComponent }
];
