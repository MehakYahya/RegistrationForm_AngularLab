import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HeaderComponent } from './app-header/header.component';
import { FooterComponent } from './app-footer/footer.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FooterComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    AppComponent

  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
