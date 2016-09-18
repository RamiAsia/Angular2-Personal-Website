import { Component, Input } from '@angular/core';



@Component({
	selector: 'badge',
	styleUrls: ['app/badge.component.css'],
	templateUrl: 'app/badge.component.html',
})
export class BadgeComponent {
	@Input() link: string;

	
	
	constructor(){
		
	}

}
