import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class I18nService {

  private keystore: any;
  
  constructor() { }

  public init(keystore: any){
		this.keystore = keystore;
	}
	
	public getLabel(key: string, model: any){
		if(this.keystore[key]){
			let label = this.keystore[key];
			if(model){
				for(let [key, value] of Object.entries(model)){
					label.replace("${"+key+"}", value);
				}
			}
			return label;
		}
		return null;
	}
}
