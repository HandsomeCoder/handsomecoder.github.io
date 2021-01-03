import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'badge-info',
  templateUrl: './badge-info.component.html',
  styleUrls: ['./badge-info.component.scss']
})
export class BadgeInfoComponent implements OnInit {

    @Input() data: any;

    constructor() { }

    ngOnInit(): void {}
}
