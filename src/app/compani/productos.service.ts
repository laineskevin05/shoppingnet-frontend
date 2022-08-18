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
  getProductosInPage(idCompani: string): Observable<GetProductosResponse[]> {
    const url: string = `${this.baseURL}/productos/inventario/${idCompani}`;
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
  imagen: Imagen;
  nombre: string;
  precio: string;
  stock: string;
  usuario?: string;
}

export interface Imagen {
  public_id: string;
  secure_url: string;
}
