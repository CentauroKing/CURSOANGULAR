import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-item',
  imports: [],
  templateUrl: './mi-item.html',
  styleUrl: './mi-item.css'
})
export class MiItem {

  tareasPendientes: {Tareaid: number, nombre: string}[] = [];
  
  eliminaTarea(tareaId: number) {
    this.tareasPendientes = this.tareasPendientes.filter(t => t.Tareaid !== tareaId);
  } 
}
