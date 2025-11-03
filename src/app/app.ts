import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibrosComponent } from './components/libros/libros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibrosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = signal('CRUD-Libros-Angular');
}
