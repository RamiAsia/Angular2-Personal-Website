import { Component, Input, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
	selector: 'toolbar',
	templateUrl: 'app/toolbar.component.html',
	styleUrls: ['app/toolbar.component.css']
})
export class ToolbarComponent {
	// @Input() title: string;
	// @Input() bgColor: string;
	// @Input() loadState: string;

	title: string;
	bgColor: string;
	loadState = 'inactive';

	changeTitle(newTitle: string){
		this.title = newTitle.valueOf();
	}

	toggleState(){
		if(this.loadState == 'inactive')
			this.loadState = 'active';
		else 
			this.loadState = 'inactive';
	}
}