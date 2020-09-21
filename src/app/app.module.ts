import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesLinkComponent } from './components/services-link/services-link.component';
import { PersonalEventsComponent } from './components/personal-events/personal-events.component';
import { OrganizationalComponent } from './components/organizational/organizational.component';
import { EducationalComponent } from './components/educational/educational.component';
import { TourstravelsComponent } from './components/tourstravels/tourstravels.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HowItWorksComponent,
    PortfolioComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesLinkComponent,
    PersonalEventsComponent,
    OrganizationalComponent,
    EducationalComponent,
    TourstravelsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
