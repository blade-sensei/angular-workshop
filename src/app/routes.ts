import { Routes } from "@angular/router";
import { DownloadComponent } from "./components/download/download.component";
import { HomepageComponent } from "./screen/homepage/homepage.component";

export const routes: Routes = [
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

