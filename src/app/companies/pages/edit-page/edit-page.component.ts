import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  ChangeEvent,
  CKEditorComponent,
} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import '../../types/interfaces';
import { PagesService } from '../../services/pages.service';
import { Modulo, Page } from '../../types/page.interface';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  ///Edito CKEditor
  public Editor = ClassicEditor;
  public modulos: Modulo[] | undefined;
  //fin CKEditor

  ///Editor monaco
  editorOptions = { theme: 'vs', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  //Fin editor monaco

  public tab: string = '0';

  public moduloActual: Modulo | undefined;
  @ViewChild('myNameElem') myNameElem!: CKEditorComponent;
  @ViewChild('selectNuevoTTelefono') selectNuevoTTelefono!: ElementRef<any>;
  @ViewChild('selectNuevoTPc') selectNuevoTPc!: ElementRef;

  public miFormulario: FormGroup = this.fb.group({
    valorSelect: ['0'],
  });

  public pagina: Page | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pagesService: PagesService
  ) {
    this.tab = '0';

    //Carga de datos de las paginas
    this.pagesService.getPaginas().subscribe((resp) => {
      this.pagina = resp.pages.find(
        (page) => page._id === this.route.snapshot.params['id']
      );
      this.modulos = this.pagina?.listHtml;
      this.moduloActual = this.modulos?.find(
        (element) =>
          element != undefined && element.tipoContenido === 'estatico'
      );

      // Para CKEditor
      this.myNameElem.writeValue(this.moduloActual?.html || '');
    });
  }

  onChange({ editor }: ChangeEvent) {
    this.modulos![this.miFormulario.value.valorSelect].html = editor.getData();
  }

  cambioSelect() {
    this.moduloActual = this.modulos![this.miFormulario.value.valorSelect];
    this.myNameElem.writeValue(this.moduloActual.html);
  }

  nuevoBloque() {
    this.modulos?.push({
      html: '<p>helloooo</p>',
      col_s: this.selectNuevoTTelefono.nativeElement.value,
      col_g: this.selectNuevoTPc.nativeElement.value,
      tipoContenido: 'estatico',
    });
  }

  ngOnInit(): void {}
}
