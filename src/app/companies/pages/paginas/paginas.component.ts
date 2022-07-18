import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent {
  constructor() {}

  public foco(a: any): void {
    console.log('jjj', a);
  }
}
