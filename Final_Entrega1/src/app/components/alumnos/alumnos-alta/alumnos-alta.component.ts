import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-alta',
  templateUrl: './alumnos-alta.component.html',
  styleUrls: ['./alumnos-alta.component.css']
})

export class AlumnosAltaComponent implements OnInit {
  title = 'Inscribir Alumno';
  formAlumno: FormGroup;

  constructor(public dialogRef: MatDialogRef<AlumnosAltaComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formAlumno = fb.group(
      {
        id: [null],
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.required]),
        email: new FormControl('', [Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'), Validators.required])

      }
    );

    if (data) {
      this.title = 'Editar Alumno';
      this.formAlumno = this.fb.group(
        {
          id: [data.id],
          nombre: new FormControl(data.nombre, [Validators.required]),
          apellido: new FormControl(data.apellido, [Validators.required]),
          telefono: new FormControl(data.telefono, [Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.required]),
          email: new FormControl(data.email, [Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'), Validators.required])
        }
      )
    }
  }

  guardar() {
    if (this.formAlumno.valid) {
      this.dialogRef.close(this.formAlumno.value)
    }
  }

  ngOnInit(): void {
  }

}
