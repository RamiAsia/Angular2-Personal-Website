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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var project_service_1 = require('./project.service');
var polaroid_component_1 = require('./polaroid.component');
require('./rxjs-extensions');
var TabsetContainerComponent = (function () {
    function TabsetContainerComponent(projectService) {
        this.projectService = projectService;
    }
    TabsetContainerComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    TabsetContainerComponent.prototype.getHobbies = function () {
        var _this = this;
        this.projectService.getHobbies().then(function (projects) { return _this.hobbies = projects; });
    };
    TabsetContainerComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getHobbies();
    };
    TabsetContainerComponent = __decorate([
        core_1.Component({
            selector: 'tabset-container',
            templateUrl: 'app/tabset-container.component.html',
            providers: [project_service_1.ProjectService],
            directives: [ng2_bootstrap_1.TAB_DIRECTIVES, polaroid_component_1.PolaroidComponent],
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], TabsetContainerComponent);
    return TabsetContainerComponent;
}());
exports.TabsetContainerComponent = TabsetContainerComponent;
//# sourceMappingURL=tabset-container.component.js.map