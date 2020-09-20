import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalEventsComponent } from './components/personal-events/personal-events.component';
import { OrganizationalComponent } from './components/organizational/organizational.component';
import { EducationalComponent } from './components/educational/educational.component';
import { TourstravelsComponent } from './components/tourstravels/tourstravels.component';

const routes: Routes = [
  {path : 'howItWorks' , component : HowItWorksComponent },
  {path : 'portfolio' , component : PortfolioComponent },
  {path : 'contactUs' , component : ContactUsComponent },
  {path : 'aboutUs' , component : AboutUsComponent },
  {path: '', component: HomepageComponent},
  {path: 'personalevent', component: PersonalEventsComponent},
  {path: 'organizationalevents', component: OrganizationalComponent},
  {path: 'educationalevents', component: EducationalComponent},
  {path: 'toursandtravels', component: TourstravelsComponent}
  // {path: '', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
