import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {credentials} from "../types/User";
import { environment } from "../environments/environment.development";
import { tap } from "rxjs";
import {LoginError, LoginSuccess} from "../types/Responses";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http:HttpClient, private cookieService:CookieService) {}

  public login(data:credentials){
    return this.http.post<LoginSuccess | LoginError>(`${environment.authUrl}/account/login`, data).pipe(
        tap((res) => {
            if('error' in res){
                return
            }
            this.cookieService.set('sessionId', res.session_id)
        })
    )
  }
}
