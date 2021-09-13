import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { DepedentsComponent } from './depedents/depedents.component';
import { DialogElementsComponent } from './dialog-elements/dialog-elements.component';
import { HomeComponent } from './home/home.component';
import {  LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path: 'home',component:HomeComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'depedents',component:DepedentsComponent},
{path: 'claims',component:ClaimsComponent},
{path: 'login',component:LoginComponent}



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
