import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcercaDeComponent } from 'src/components/acerca-de/acerca-de.component';
import { BannerComponent } from 'src/components/banner/banner.component';
import { EducationComponent } from 'src/components/education/education.component';
import { ExperienceComponent } from 'src/components/experience/experience.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { LogoApComponent } from 'src/components/logo-ap/logo-ap.component';
import { RedesComponent } from 'src/components/redes/redes.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { ProyectsComponent } from 'src/components/proyects/proyects.component';
import { FooterComponent } from 'src/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoApComponent,
    RedesComponent,
    BannerComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
