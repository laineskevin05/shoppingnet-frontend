import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import {
  CreatePageResponse,
  GetPageResponse,
  Page,
} from '../types/page.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  crearPagina(pagina: Page): Observable<CreatePageResponse> {
    const url: string = `${this.baseURL}/companies/page/new`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<CreatePageResponse>(url, pagina, { headers });
  }

  getPaginas(): Observable<GetPageResponse> {
    const idUser: string = this.authService.usuario.uid || '';

    const url: string = `${this.baseURL}/companies/page/${idUser}`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<GetPageResponse>(url, { headers });
  }

  actualizarPagina(pagina: Page): Observable<CreatePageResponse> {
    const url: string = `${this.baseURL}/companies/page/update/`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<CreatePageResponse>(
      url,
      { id: pagina?._id, page: pagina },
      { headers }
    );
  }
}
