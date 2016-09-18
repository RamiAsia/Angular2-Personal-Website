import { Component, Input } from '@angular/core';
import { BadgeComponent } from './badge.component';


@Component({
    selector: 'info',
    styleUrls: ['app/info.component.css'],
    templateUrl: 'app/info.component.html',
    directives: [BadgeComponent],
})
export class InfoComponent {
    imgSrc: String;
}