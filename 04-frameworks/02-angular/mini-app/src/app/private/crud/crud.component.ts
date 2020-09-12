import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { CrudEntity } from 'src/app/model/crudEntity';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  crudMembers: CrudEntity[] = [];
  crud: CrudEntity;
  columns: string[] = ['id', 'login', 'avatar_url'];

  searchValue = '';

  constructor(private service: CrudService) {
    service.getAll().subscribe(
      json => this.crudMembers = json
    );
  }
  ngOnInit(): void {
  }

}
