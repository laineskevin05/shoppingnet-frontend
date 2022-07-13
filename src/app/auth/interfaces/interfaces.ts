export interface AuthResponse {
  ok: boolean;
  uid?: string;
  usuario?: Usuario;
  token?: string;
  msg?: string;
}

export interface Usuario {
  uid?: string;
  tipoUsuario: String;
  nombre: String;
  apellido?: String;
  email: String;
  telefono?: String;
  direccion?: String;
  //solo para el usuario empresa
  tipoNegocio?: String;
  descripcion?: String;
}
