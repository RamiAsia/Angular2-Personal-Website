import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BadgeComponent } from './badge.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { InfoComponent } from './info.component';
import { TabsetContainerComponent } from './tabset-container.component';

declare var Vibrant: any;

@Component({
	styleUrls: 		['app/app.component.css'],
	selector: 		'my-app',
  	templateUrl:	'app/app.component.html',
	directives: [ROUTER_DIRECTIVES, BadgeComponent, ToolbarComponent, InfoComponent, TabsetContainerComponent],
})
export class AppComponent implements AfterViewInit{
	//Customizable options:
	title = 'Rami Asia';
	imgSrc="img/badge.jpg";
	




	vibrantObj: any;
	img: Element;


	
    
    @ViewChild(InfoComponent) 
    private infoComp: InfoComponent;

    
    
	ngAfterViewInit(){
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
	}
 }