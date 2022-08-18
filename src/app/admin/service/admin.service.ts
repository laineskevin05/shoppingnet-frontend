import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GetUsuariosResponse } from '../types/admin.interfaces';
import {
  CreatePageResponse,
  GetPageResponse,
  Page,
} from 'src/app/companies/types/page.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsuarios(): Observable<GetUsuariosResponse> {
    const url: string = `${this.baseUrl}/admin/usuarios`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<GetUsuariosResponse>(url, { headers });
  }

  crearPlantilla(pagina: Page): Observable<CreatePageResponse> {
    const url: string = `${this.baseUrl}/admin/plantilla/new`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<CreatePageResponse>(url, pagina, { headers });
  }

  getPlantillas(): Observable<GetPageResponse> {
    const url: string = `${this.baseUrl}/admin/plantillas`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<GetPageResponse>(url, { headers });
  }

  actualizarPlantilla(pagina: Page): Observable<CreatePageResponse> {
    const url: string = `${this.baseUrl}/admin/plantilla/update/`;
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
