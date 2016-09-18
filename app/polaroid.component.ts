import { Component, Input } from '@angular/core';

@Component({
	selector: 'polaroid',
	templateUrl: 'app/polaroid.component.html',
	
})
export class PolaroidComponent {
	@Input() imgLink: string;
	@Input() caption: string;
}