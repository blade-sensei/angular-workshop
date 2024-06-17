import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureComponent } from './components/feature/feature.component';
import { DownloadComponent } from './components/download/download.component';
import { HomepageComponent } from './screen/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeatureComponent,
    DownloadComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
