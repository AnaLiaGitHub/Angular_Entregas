import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno, listaAlumnos } from 'src/app/models/alumnos';
import { AlumnosAltaComponent } from '../alumnos-alta/alumnos-alta.component';

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

  dialogAlumno() {
    this.dialog.open(
      AlumnosAltaComponent, {
      width: '400px',
    }
    ).beforeClosed().subscribe((res: Alumno) => {
      //console.log(res);
      if (res != undefined) {
        this.alumnosDB.push(
          {
            ...res,
            //Parche feo momentaño para asignar "id visual"
            id: this.alumnosDB.length + 1
          }
        )

        this.ALUMNOS_DB.data = this.alumnosDB
      }
    })
  }

  editarAlumno(element: any) {
    this.dialog.open(AlumnosAltaComponent, {
      width: '400px',
      data: element
    }).beforeClosed().subscribe((res: Alumno) => {
      let found = this.alumnosDB.find(al => al.id == res.id);
      if (found) {
        found.nombre = res.nombre;
        found.apellido = res.apellido;
        found.telefono = res.telefono;
        found.email = res.email
      }
      //console.log(found);
    })

  }

  eliminarAlumno(id: number) {
    let position = this.alumnosDB.findIndex(listaAlumnos => listaAlumnos.id == id)
    this.alumnosDB.splice(position, 1)
    this.ALUMNOS_DB.data = this.alumnosDB
  }


}
