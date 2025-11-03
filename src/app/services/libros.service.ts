import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private url = 'https://6908a14e2d902d0651b12170.mockapi.io/books/books';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }

  save(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.url, libro);
  }

  edit(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.url}/${libro.id}`, libro);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
