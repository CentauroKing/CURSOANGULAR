import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'ToDoList';
}

@Component({
  selector: 'app-tarea',
  template: `
    <div class="tarea">
      <span>{{ descripcion }}</span>
    </div>
  `,
  styles: [`
    .tarea {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 8px;
      background: #f9f9f9;
    }
  `]
})
export class Tarea {
  descripcion: string = '';
  tareasPendientes: {Tareaid: number, nombre: string}[] = [];
  insertaTarea() {
    if (this.descripcion.trim() !== '') {
      this.tareasPendientes.push({ Tareaid: this.tareasPendientes.length + 1, nombre: this.descripcion });
      this.descripcion = '';
    }
  }
  eliminaTarea(tareaId: number) {
    this.tareasPendientes = this.tareasPendientes.filter(t => t.Tareaid !== tareaId);
  } 
}
