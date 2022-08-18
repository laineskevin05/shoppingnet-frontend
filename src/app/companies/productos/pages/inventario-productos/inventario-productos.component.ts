import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Producto } from '../../interfaces/interfaces';
import { ProductosService } from '../../services/productos.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-inventario-productos',
  templateUrl: './inventario-productos.component.html',
  styleUrls: ['./inventario-productos.component.css'],
  /* providers: [ProductosService], */
})
export class InventarioProductosComponent implements OnInit {

  id!: string;
  product!: Producto;
  file!: File;
  photoSelected!: any | ArrayBuffer
  producto = [];

  constructor(public productoService: ProductosService,
      private authService: AuthService
    ) { 
      console.log(this.authService.usuario, 'usuario')
    }

  ngOnInit(): void {
    this.getProductos();
  }

  resetForm(form: NgForm) {
    form.reset();
  }
 
  onPhotoSelected(event: Event): void{
    const target = event.target as HTMLInputElement;

    if(target.files && target.files[0]){
      this.file = <File>target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  /* crearProducto(form: NgForm){
    this.productoService.crearProducto(form.value).subscribe(
      (res) => {
         this.getProductos(); 
        form.reset() 
      }
    )
  } */

  


  getProductos(){
    this.productoService.getProductos().subscribe((res)=> {
      this.productoService.productos = res;
      console.log("mostrando productos")
    },
      err => console.log(err)
    )
  }

  uploadPhoto(
    nombre: HTMLInputElement, 
    categoria: HTMLInputElement, 
    stock: HTMLInputElement, 
    precio: HTMLInputElement, 
    descripcion: HTMLTextAreaElement)
  {
      this.productoService.crearProducto(
        nombre.value, 
        categoria.value, 
        stock.value, 
        precio.value, 
        descripcion.value,
        /* this.authService.usuario.uid, */
        this.file
      ).subscribe(
        res => {
          console.log(res);
          this.getProductos();
          
        },
        err => console.log(err)
      )
      
      
      return false
      
  }

  borrarProducto(id: string){
    if (confirm('Are you sure you want to delete it?')){
      this.productoService.borrarProducto(id).subscribe(
        (res) => {
          this.getProductos();
        },
        (err) => console.error(err)
      )
    }
    
  }  

  selectorIdAct(id: string){
    id = id
  }

  updateProducto(
    nombre: HTMLInputElement,
    categoria: HTMLInputElement,
    stock: HTMLInputElement,
    precio: HTMLInputElement,
    descripcion: HTMLTextAreaElement 
  ): boolean {
    this.productoService.updateProducto(
      this.product._id, 
      nombre.value, 
      categoria.value,  
      stock.value,
      precio.value,
      descripcion.value,
    ).subscribe(res => {
      console.log(res);
      this.getProductos();
    });
  return false;
  }
  

}
