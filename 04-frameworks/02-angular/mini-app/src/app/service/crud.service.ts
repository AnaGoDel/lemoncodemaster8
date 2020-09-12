import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudEntity } from 'src/app/model/crudEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  members: CrudEntity[] = null;
  url = `https://api.github.com/orgs/lemoncode/members`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CrudEntity[]> {
    return this.http.get<CrudEntity[]>(this.url);
  }
}
