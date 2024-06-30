import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'experience-info',
    templateUrl: './experience-info.component.html',
    styleUrls: ['./experience-info.component.scss']
})
export class ExperienceInfoComponent implements OnInit {

    @Input() data: any;
    
    constructor() { }

    ngOnInit(): void {
    }
}
