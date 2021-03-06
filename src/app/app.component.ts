import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { I18nService } from 'src/app/services/i18n/i18n.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { RestCounterService } from './utility/rest_counter/rest-counter.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private basePath: string = "data/";
	private profilePath: string = this.basePath + "profile_info.json";
	private i18nKeyStorePath: string = this.basePath + "i18n_keystore.json";

	public basicInfo: any;
    public contactInfo: any;
    public experienceInfo: any;
    public skillsInfo: any;
    public badgeInfo: any;
    public certificationInfo: any;

    public isInitiated: boolean = false;

	constructor(private http: HttpClient,
		private i18nService: I18nService,
        private profileService: ProfileService,
        private restCounterService: RestCounterService) {
	}

	ngOnInit(): void {
		this.loadData()
    }
    
    initiate(){
        this.basicInfo = this.profileService.get("basic_info");
        this.contactInfo = this.profileService.get("contact_info");
        this.experienceInfo = this.profileService.get("experience_info")
        this.skillsInfo = this.profileService.get("skills_info")
        this.badgeInfo = this.profileService.get("badge_info")
        this.certificationInfo = this.profileService.get("certification_info")


        this.isInitiated = true;
    }

	public loadData() {

        let counter = this.restCounterService.getCounterMethod(2, this.initiate.bind(this))

		this.loadProfileInfo(counter);
		this.loadI18nKeyStore(counter);
	}

	public loadProfileInfo(counter: any) {
		let component = this;
		this.http.get(this.profilePath).subscribe(data => {
            component.profileService.init(data);
            counter()
		});
	}

	public loadI18nKeyStore(counter: any) {
		let component = this;
		this.http.get(this.i18nKeyStorePath).subscribe(data => {
            component.i18nService.init(data);
            counter();
		});
	}

}
