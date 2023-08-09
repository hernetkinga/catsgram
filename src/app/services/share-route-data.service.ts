import { Injectable } from '@angular/core';
import { Breeds } from '../api/models/breeds.model';


@Injectable({
  providedIn: 'root'
})
export class ShareRouteDataService {

  public data: Breeds[] = [];

  constructor() { }


}
