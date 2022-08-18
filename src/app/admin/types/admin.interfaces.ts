export interface GetUsuariosResponse {
  ok: boolean;
  usuarios: Usuario[];
}

export interface Usuario {
  _id: string;
  apellido?: string;
  createdAt: Date;
  descripcion?: string;
  direccion?: string;
  email: string;
  nombre: string;
  telefono?: string;
  tipoNegocio?: string;
  tipoUsuario: string;
  updatedAt: Date;
}
