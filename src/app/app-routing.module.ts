import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component'
import { AboutComponent } from './modules/about/about/about.component'
import { ContactComponent } from './shared/components/contact/contact.component'
import { ProjectComponent } from './modules/project/project/project.component'
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
