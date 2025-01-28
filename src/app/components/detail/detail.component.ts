import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';
@Component({
	selector: 'app-detail',
	standalone: true,
	imports: [],
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

	html: string | null = "";
	constructor(private sanitaizer: DomSanitizer) { }
	ngOnInit(): void {
		console.log(this.getHtml()?.toString());
	}


	content = "# Testando Loader\n\r" +
		"afvoiao viofdjioaavaiodfva aafvaodfmoviadfvadfafd afdvafdvadfv\n\r" +
		"afvoiao viofdjioaavaiodfva aafvaodfmoviadfvadfafd afdvafdvadfv\n\r" +
		"afvoiao viofdjioaavaiodfva aafvaodfmoviadfvadfafd afdvafdvadfv\n\r" +
		"afvoiao viofdjioaavaiodfva aafvaodfmoviadfvadfafd afdvafdvadfv\n\r" +
		"tags: java, programação, oop";
	//html = this.markdownToHtml();

	// markdownToHtml() {
	// 	let html = marked(this.content) as string;
	// 	console.log(html);
	// 	return html;
	// }

	getHtml() {
		return this.sanitaizer.sanitize(SecurityContext.HTML, this.content);

	}
}
