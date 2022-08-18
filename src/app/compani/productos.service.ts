import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<GetProductosResponse[]> {
    const url: string = `${this.baseURL}/productos/`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<GetProductosResponse[]>(url, { headers });
  }
}

export interface GetProductosResponse {
  __v: number;
  _id: string;
  categoria: string;
  descripcion: string;
  nombre: string;
  precio?: number;
  stock?: number;
}
