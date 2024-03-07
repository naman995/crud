import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/');
  }
  create(post: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post));
  }
  update(id: number, post: any): Observable<any> {
    return this.httpClient.put(
      this.apiURL + '/posts/' + id,
      JSON.stringify(post)
    );
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/posts/' + id);
  }
  getById(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/' + id);
  }
}
