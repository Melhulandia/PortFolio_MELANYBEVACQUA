import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { GithubComponent } from './components/github/github.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { ArgProgramaComponent } from './components/arg-programa/arg-programa.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwitterComponent,
    FacebookComponent,
    GithubComponent,
    LinkedinComponent,
    ArgProgramaComponent,
    InstagramComponent,
    LogoApComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
