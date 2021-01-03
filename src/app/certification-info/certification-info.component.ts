import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'certification-info',
    templateUrl: './certification-info.component.html',
    styleUrls: ['./certification-info.component.scss']
})
export class CertificationInfoComponent implements OnInit {
    
    private _data; // private property _item

    // use getter setter to define the property
    get data(): any { 
      return this._data;
    }
    
    @Input()
    set data(values: any) {
        values.forEach((x: any) => x.timestamp = new Date(x.issued_on).getTime())
        this._data = values.sort((a : any, b: any) => b.timestamp - a.timestamp)
    }

    constructor() { }

    ngOnInit(): void {
       
    }

}
