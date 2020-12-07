import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurgeonServiceService {

  constructor(private http: HttpClient) { }

  getSurgeon(page, value) {
    if (value)
      console.log(value.searchInput);
    const url = 'http://localhost:3000/api/surgeons?page=' + page + ((value === null || value === undefined) ? '' : ('&name=' + value.searchInput));

    return this.http.get(url);
  }
}
