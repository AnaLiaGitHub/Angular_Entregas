import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno, listaAlumnos } from 'src/app/moduls/alumnos';

@Component({
  selector: 'app-alumnos-view',
  templateUrl: './alumnos-view.component.html',
  styleUrls: ['./alumnos-view.component.css']
})
export class AlumnosViewComponent implements OnInit {

  alumnosDB = listaAlumnos

  ALUMNOS_DB = new MatTableDataSource<Alumno>(this.alumnosDB)
  AlumnosbCols: string[] = ['id', 'nombre', 'apellido', 'telefono', 'email', 'acciones'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ALUMNOS_DB.data = this.alumnosDB
  }


}
