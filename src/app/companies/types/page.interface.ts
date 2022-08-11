export interface CreatePageResponse {
  ok: boolean;
  page: Page;
}

export interface GetPageResponse {
  ok: boolean;
  pages: Page[];
}

export interface Page {
  _id?: string;
  createdAt?: Date;
  listHtml: Modulo[];
  mostrarNavbar: boolean;
  nombre: string;
  updatedAt?: Date;
  user: string;
  detalle: string;
}

export interface Modulo {
  html: string;
  col_g: string;
  col_s: string;
  tipoContenido: string;
}
