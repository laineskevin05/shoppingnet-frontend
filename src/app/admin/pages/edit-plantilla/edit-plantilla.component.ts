import { Component, OnInit, ViewChild } from '@angular/core';
import { Modulo, Page } from 'src/app/companies/types/page.interface';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  ChangeEvent,
  CKEditorComponent,
} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-edit-plantilla',
  templateUrl: './edit-plantilla.component.html',
  styleUrls: ['./edit-plantilla.component.css'],
})
export class EditPlantillaComponent implements OnInit {
  ///Edito CKEditor
  public Editor = ClassicEditor;
  public modulos: Modulo[] | undefined;
  //fin CKEditor

  ///Editor monaco
  editorOptions = { theme: 'vs', language: 'html' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  //Fin editor monaco

  public tab: string = '0';
  public pagina: Page | undefined;

  public moduloActualCkEditor: Modulo | undefined;
  public moduloActualMonaco: Modulo | undefined;
  public isUpdatePage: boolean = false;
  public isSuccessUpdatePage: boolean = false;
  public numeroGrillasBootstrap = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ].reverse();

  @ViewChild('myNameElem') myNameElem!: CKEditorComponent;

  public miFormulario: FormGroup = this.fb.group({
    valorSelect: ['0'],
    valorSelect2: ['0'],
  });
  public miFormularioNuevoBloque: FormGroup = this.fb.group({
    valorSelectPosicion: [0],
    valorSelectTelefono: [12],
    valorSelectPC: [12],
    valorSelectTipoContenido: 'estatico',
  });

  public miFormularioPage: FormGroup = this.fb.group({
    nombre: '',
    valorSelectNavbar: true,
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    public sanitizer: DomSanitizer
  ) {
    this.tab = '0';

    //Carga de datos de las paginas
    this.adminService.getPlantillas().subscribe((resp) => {
      this.pagina = resp.pages.find(
        (page) => page._id === this.route.snapshot.params['id']
      );

      this.miFormularioPage.controls['nombre'].setValue(
        this.pagina?.nombre || ''
      );
      this.miFormularioPage.controls['valorSelectNavbar'].setValue(
        this.pagina?.mostrarNavbar
      );

      this.modulos = this.pagina?.listHtml;
      // Para CKEditor
      this.moduloActualCkEditor = this.modulos?.find(
        (element) =>
          element != undefined && element.tipoContenido === 'estatico'
      );
      this.myNameElem.writeValue(this.moduloActualCkEditor?.html || '');

      // Para Monaco Editor
      this.moduloActualMonaco = this.modulos?.find(
        (element) => element != undefined
      );
      this.code = this.moduloActualMonaco?.html || '';
    });
  }
  ngOnInit(): void {}

  onChange({ editor }: ChangeEvent) {
    if (this.modulos?.length) {
      this.modulos![this.miFormulario.value.valorSelect].html =
        editor.getData();
      if (
        this.miFormulario.value.valorSelect ===
        this.miFormulario.value.valorSelect2
      ) {
        this.code =
          this.modulos![this.miFormulario.value.valorSelect].html || '';
      }
    }
  }

  cambioSelect() {
    this.moduloActualCkEditor =
      this.modulos![this.miFormulario.value.valorSelect];
    this.myNameElem?.writeValue(this.moduloActualCkEditor.html || '');

    this.code = this.modulos![this.miFormulario.value.valorSelect2].html || '';
  }

  cambioSelect2() {
    this.moduloActualMonaco =
      this.modulos![this.miFormulario.value.valorSelect2];
    this.code = this.moduloActualMonaco.html || '<div>No hay html</div>';
  }

  cambio() {
    this.modulos![this.miFormulario.value.valorSelect2].html = this.code;
  }

  nuevoBloque() {
    this.modulos?.splice(
      this.miFormularioNuevoBloque.value.valorSelectPosicion,
      0,
      {
        html: '<p>Vacio..</p>',
        col_s: this.miFormularioNuevoBloque.value.valorSelectTelefono,
        col_g: this.miFormularioNuevoBloque.value.valorSelectPC,
        tipoContenido:
          this.miFormularioNuevoBloque.value.valorSelectTipoContenido,
      }
    );
    this.cambioSelect();
    this.cambioSelect2();
    if (this.modulos?.length === 1) {
      this.moduloActualMonaco = this.modulos[0];
      this.code = this.moduloActualMonaco.html;
    }
  }

  actualizarDatos() {
    this.pagina!.listHtml = this.modulos || [];
    if (this.pagina) {
      this.pagina.nombre = this.miFormularioPage.value.nombre || '';
      this.pagina.mostrarNavbar =
        this.miFormularioPage.value.valorSelectNavbar || true;
      this.adminService.actualizarPlantilla(this.pagina).subscribe(
        (res) => {
          console.log(res);
          this.isSuccessUpdatePage = true;
        },
        (err) => {
          this.isSuccessUpdatePage = false;
          console.log(err);
        },
        () => {
          this.isUpdatePage = true;
        }
      );
    }
  }
}
