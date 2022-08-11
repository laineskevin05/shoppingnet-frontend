import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { CreatePageResponse, Page } from '../../types/page.interface';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent implements OnInit {
  public paginas: Page[] = [];

  constructor(private pagesService: PagesService) {
    this.pagesService.getPaginas().subscribe((resp) => {
      this.paginas = resp.pages;
      console.log('paginas exitos exitoso!', this.paginas);
    });
  }

  ngOnInit(): void {}
}
