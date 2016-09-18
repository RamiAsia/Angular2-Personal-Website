import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Project } from './project';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ProjectService {

	private projectUrl = 'http://ramiasia.freevar.com/php/getprojects.php'; //URL to web api
	projects: Project[];

	constructor(private http: Http){}

	getProjects() {
			return this.http.get(this.projectUrl + '?type=1')
			.toPromise()
			.then(response => response.json() as Project[])
			.catch(this.handleError);
		

		// return this.http.get(this.projectUrl)
		// 	.toPromise()
		// 	.then(response => response.json().data as Project[])
		// 	.catch(this.handleError);
	}

	getHobbies() {
			return this.http.get(this.projectUrl + '?type=3')
			.toPromise()
			.then(response => response.json() as Project[])
			.catch(this.handleError);
		

		// return this.http.get(this.projectUrl)
		// 	.toPromise()
		// 	.then(response => response.json().data as Project[])
		// 	.catch(this.handleError);
	}

	// getProject(id: number) {
	// 	return this.getProjects().then(heroes => heroes.find(hero => hero.id === id));
	// }

	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}

