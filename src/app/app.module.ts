import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './modules/auth/auth.module';
import { AboutComponent } from './modules/about/about/about.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { ProjectComponent } from './modules/project/project/project.component';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ToolbarComponent,
    HomeComponent,
    ContactComponent,
    ProjectComponent,
    SlideshowComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,

    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
