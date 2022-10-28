import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/moduls/curso';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  cursos: Curso[] = [
    { nombre: 'Desarrollo Web', comision: '123456', profesor: 'Luis', fechaInicio: new Date(2022, 0, 1), fechaFin: new Date(2022, 1, 28), inscripcionAbierta: true, imagen: './img/luis.jpg'},
    { nombre: 'JavaScript', comision: '123457', profesor: 'Julieta', fechaInicio: new Date(2022, 1, 1), fechaFin: new Date(2022, 2, 31), inscripcionAbierta: false, imagen: './img/julieta.jpg'},
    { nombre: 'Angular', comision: '123458', profesor: 'Edinson', fechaInicio: new Date(2022, 2, 1), fechaFin: new Date(2022, 2, 30), inscripcionAbierta: false, imagen: './img/edinson.jpg'}
  ]
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string) {
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  filtrarComision(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string) {
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
