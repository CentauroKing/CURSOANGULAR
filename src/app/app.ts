
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'ToDoList';
  
  
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

