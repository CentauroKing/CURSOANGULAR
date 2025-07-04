import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-item',
  imports: [],
  templateUrl: './mi-item.html',
  styleUrl: './mi-item.css'
})
export class MiItem {

  @Input() descripcion: string = '';

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
