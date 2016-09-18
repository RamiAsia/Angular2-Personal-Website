import { Component, OnInit } from '@angular/core';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Project } from './project';
import { ProjectService } from './project.service';
import { PolaroidComponent } from './polaroid.component';
import './rxjs-extensions';

@Component({
    selector: 'tabset-container',
    templateUrl: 'app/tabset-container.component.html',
    providers: [ProjectService],
    directives: [TAB_DIRECTIVES, PolaroidComponent],
})
export class TabsetContainerComponent implements OnInit {

	projects: Project[];
	hobbies: Project[];
	constructor(
		private projectService: ProjectService
	){}


	getProjects(){
		this.projectService.getProjects().then(projects => this.projects = projects);
	}

	getHobbies(){
		this.projectService.getHobbies().then(projects => this.hobbies = projects);
	}

    ngOnInit(){
    	this.getProjects();
    	this.getHobbies();
    }
    
}