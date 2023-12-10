import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/layout/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { MyProjectsComponent } from './components/layout/my-projects/my-projects.component';
import { ContactMeComponent } from './components/layout/contact-me/contact-me.component';
import { ShowProjectComponent } from './components/show-project/show-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollableComponent } from './components/tests/scrollable/scrollable.component';
import { VisibleComp } from './components/tests/testeo.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeaderComponent,
    MyProjectsComponent,
    ContactMeComponent,
    ShowProjectComponent,
    FooterComponent,
    ScrollableComponent,
    VisibleComp,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
