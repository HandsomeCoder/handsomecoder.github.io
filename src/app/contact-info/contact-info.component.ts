import { Component, OnInit, Input } from '@angular/core';
import { ContactInfoModel } from '../model/contact-info/contact-info.model';

@Component({
    selector: 'contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

    @Input() data: any;

    public contactInfo: ContactInfoModel;

    constructor() { 
    }

    ngOnInit(): void {
        this.contactInfo = new ContactInfoModel().deserialize(this.data);
    }

}
