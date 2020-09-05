import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

    @Input() data: any;

    constructor() { }

    ngOnInit(): void {}

}
