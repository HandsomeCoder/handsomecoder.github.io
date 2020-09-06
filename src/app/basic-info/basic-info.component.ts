import { Component, OnInit, Input } from '@angular/core';
import { BasicInfoModel } from '../model/basic-info/basic-info.model';

@Component({
    selector: 'basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

    @Input() data: any;

    public basicInfo: BasicInfoModel;

    constructor() { }

    ngOnInit(): void {
        this.basicInfo = new BasicInfoModel().deserialize(this.data);
    }

}
