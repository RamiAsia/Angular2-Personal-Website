"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectUrl = 'http://ramiasia.freevar.com/php/getprojects.php'; //URL to web api
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectUrl + '?type=1')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        // return this.http.get(this.projectUrl)
        // 	.toPromise()
        // 	.then(response => response.json().data as Project[])
        // 	.catch(this.handleError);
    };
    ProjectService.prototype.getHobbies = function () {
        return this.http.get(this.projectUrl + '?type=3')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        // return this.http.get(this.projectUrl)
        // 	.toPromise()
        // 	.then(response => response.json().data as Project[])
        // 	.catch(this.handleError);
    };
    // getProject(id: number) {
    // 	return this.getProjects().then(heroes => heroes.find(hero => hero.id === id));
    // }
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map