
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
  
  porTeclado: string = '';
  tareasPendientesPadre: Tarea[] = [];
  
  obtenerTareas(vieneTareas: Tarea[]) {
    this.tareasPendientesPadre = vieneTareas;
  }
}

export type Tarea = {
  tareaId: number;
  tareaNombre: string;
}
