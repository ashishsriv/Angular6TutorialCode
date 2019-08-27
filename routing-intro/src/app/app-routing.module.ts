import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'settings', component:SettingsComponent, 
  children : [
    {path:'profile' , component:SettingsProfileComponent},
    {path:'contact', component: SettingsContactComponent},
    {path:'**', redirectTo:'profile', pathMatch:'full'}
  ]
  },
  {path:'**', component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
