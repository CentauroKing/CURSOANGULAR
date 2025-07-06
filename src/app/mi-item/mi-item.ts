import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mi-item',
  imports: [],
  templateUrl: './mi-item.html',
  styleUrl: './mi-item.css'
})
export class MiItem {

  @Input() tareasPendientes: Tarea[] = [];
  @Input() tareaNueva: string = '';
  @Output() variableEmisoraHijo: EventEmitter <any> = new EventEmitter();
  
  //Metodo para eliminar una tarea
  eliminaTarea(tareaId: number) {
    this.tareasPendientes = this.tareasPendientes.filter(t => t.tareaId !== tareaId);
  } 
  //Metodo para insertar una tarea
  insertaTarea(){
    if (this.tareaNueva.trim() !== '') {
      this.tareasPendientes.push({ tareaId: this.tareasPendientes.length + 1, tareaNombre: this.tareaNueva });
      this.tareaNueva = '';
      this.tareasPendientes
      this.variableEmisoraHijo.emit(this.tareasPendientes); 
    }
  }
}
export type Tarea = {
  tareaId: number;
  tareaNombre: string;
}
