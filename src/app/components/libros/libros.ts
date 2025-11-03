import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css']
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  libroSeleccionado: Libro = { title: '', author: '' , year: undefined }; 

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros() {
    this.librosService.getAll().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error cargando libros', err)
    });
  }

  agregar() {
    this.librosService.save(this.libroSeleccionado).subscribe(() => {
      this.cargarLibros();
      this.limpiarFormulario();
    });
  }

  editar(lib: Libro) {
    this.libroSeleccionado = { ...lib };
  }

  actualizar() {
    if (this.libroSeleccionado.id) {
      this.librosService.edit(this.libroSeleccionado).subscribe(() => {
        this.cargarLibros();
        this.limpiarFormulario();
      });
    }
  }

  eliminar(id?: number) {
    if (!id) return;
    this.librosService.delete(id).subscribe(() => this.cargarLibros());
  }

  limpiarFormulario() {
    this.libroSeleccionado = { title: '', author: '' };
  }
}
