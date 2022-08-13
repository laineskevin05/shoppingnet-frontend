export interface Photo {
    _id?: string;
    nombre: String;
    categoria: String;
    imagen: string;
    stock: number;
    precio: number;
    empresa: any;
    descripcion?: string;
}