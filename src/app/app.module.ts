import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import {ROUTE_NAMES, ROUTE_PATHS} from 'src/config';
import {  CookieService  } from "ngx-cookie-service";

const routes: Routes = [
  { path: ROUTE_NAMES.SingIn, component: SigninComponent },
  { path: ROUTE_NAMES.Dashboard, component: DashboardComponent },
  { path: '', redirectTo: ROUTE_PATHS.SingIn, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    DashboardComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
