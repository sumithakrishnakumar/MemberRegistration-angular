import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogElementsComponent } from './dialog-elements/dialog-elements.component';
import { RegisterComponent } from './register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SelectService } from './register/SelectService';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DepedentsComponent } from './depedents/depedents.component';
import { ClaimsComponent } from './claims/claims.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogElementsComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DepedentsComponent,
    ClaimsComponent,
    ClaimsComponent,
    
  ],
  providers: [SelectService],
  schemas: [
    NO_ERRORS_SCHEMA
  ],

  entryComponents: [DialogElementsComponent,RegisterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
