import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHTMLPipe } from './pipes/sanitize-html.pipe';
import { I18nPipe } from './pipes/i18n.pipe';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { SkillsInfoComponent } from './skills-info/skills-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    ContactInfoComponent,
    SanitizeHTMLPipe,
    I18nPipe,
    ExperienceInfoComponent,
    SkillsInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
