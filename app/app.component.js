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
var badge_component_1 = require('./badge.component');
var router_1 = require('@angular/router');
var toolbar_component_1 = require('./toolbar.component');
var info_component_1 = require('./info.component');
var tabset_container_component_1 = require('./tabset-container.component');
var AppComponent = (function () {
    function AppComponent() {
        //Customizable options:
        this.title = 'Rami Asia';
        this.imgSrc = "img/badge.jpg";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        //this.toolbarComp.changeTitle(this.title);
        this.img = document.getElementById("main-badge");
        this.infoComp.imgSrc = this.imgSrc;
        // console.log(this.img);
        // this.img.addEventListener('load', function() {
        // 	console.log("Using Vibrant to extract colors");
        //     this.vibrantObj = new Vibrant(document.getElementById("main-badge"));
        //     var swatches = this.vibrantObj.swatches();
        //     var colors: {[id: string] : string} = {};
        //     for (var swatch in swatches) {
        //         if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
        //             console.log(swatch, swatches[swatch].getHex());
        //             colors[swatch] = swatches[swatch].getHex();
        //         }
        //     }            
        //Set Theme:
        //            document.getElementsByClassName("info-component").item(0).style.backgroundColor = colors['DarkVibrant'];
        //            document.getElementsByClassName("info-component").item(0).style.backgroundColor = "#668cff";
        // document.getElementsByClassName("info-component").item(0).style.backgroundColor = "#4d79ff";
        // document.getElementsByClassName("info-component").item(0).
        //            document.bgColor = colors['Muted'];
        //            document.body.style.backgroundColor = colors['Muted'];
        // });
    };
    __decorate([
        core_1.ViewChild(info_component_1.InfoComponent), 
        __metadata('design:type', info_component_1.InfoComponent)
    ], AppComponent.prototype, "infoComp", void 0);
    AppComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/app.component.css'],
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, badge_component_1.BadgeComponent, toolbar_component_1.ToolbarComponent, info_component_1.InfoComponent, tabset_container_component_1.TabsetContainerComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map