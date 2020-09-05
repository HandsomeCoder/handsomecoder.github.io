import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

    @Input() data: any;

    constructor() { }

    ngOnInit(): void {
    }

}
