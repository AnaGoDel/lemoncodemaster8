import { Pipe, PipeTransform } from '@angular/core';
import { CrudEntity } from 'src/app/model/crudEntity';

@Pipe({
  name: 'searchByLogin'
})
export class SearchByLoginPipe implements PipeTransform {

  transform(members: CrudEntity[], value: string): CrudEntity[] {
    return members.filter(member => member.login.toLowerCase().includes(value.toLowerCase()));
  }


}
