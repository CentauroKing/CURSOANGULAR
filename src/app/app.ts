
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MiItem} from './mi-item/mi-item';
@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, CommonModule, MiItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'ToDoList'; 
  elemento: string = '';
  tareasPendientes: {Tareaid: number, nombre: string}[] = [];
}

