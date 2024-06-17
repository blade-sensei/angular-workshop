import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './components/download/download.component';
import { HomepageComponent } from './screen/homepage/homepage.component';

const routes: Routes = [
  {
    path: "download",
    component: DownloadComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
