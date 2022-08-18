import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from '../../../../environments/environment';
import { Producto } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl: string = environment.baseUrl + '/productos';
 


  productos!: Producto[];

  constructor(private http: HttpClient, private authService: AuthService) { }


  crearProducto(nombre: string, categoria: string, stock:string, precio:string, descripcion: string, imagen: File, ){
    const idUser: string = this.authService.usuario.uid || '';
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('categoria', categoria);
    fd.append('stock', stock);
    fd.append('precio', precio);
    fd.append('descripcion', descripcion);
    fd.append('image', imagen);
    fd.append('usuario', idUser);
    console.log(idUser, fd)
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.post(this.baseUrl, fd,  {headers})
  }

  getProductos(){
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<Producto[]>(`${this.baseUrl}/inventario/${this.authService.usuario.uid}`  , {headers})
  }

  borrarProducto(_id: string){
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.delete(`${this.baseUrl}/${_id}`, {headers})
  }

  getProducto(id: string){
    return this.http.get<Producto>(`${this.baseUrl}/${id}`)
  }

  updateProducto(id: string, nombre: string, categoria: string, stock:string, precio:string, descripcion: string) {
    return this.http.put(`${this.baseUrl}/${id}`, {nombre, categoria, stock, precio, descripcion})
  }

}

