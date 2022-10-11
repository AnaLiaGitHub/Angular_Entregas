import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioUsuario: FormGroup;
  contrasenasIguales!: boolean;

  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email, Validators.required, Validators.minLength(6), Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
      contraseña2: new FormControl('', [Validators.required, Validators.minLength(6)]),
      admin: new FormControl(false, [])
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const contraseña1 = this.formularioUsuario.value.contraseña;
    const contraseña2 = this.formularioUsuario.value.contraseña2;
    this.contrasenasIguales = contraseña1 === contraseña2;

    this.formularioUsuario.addControl('control1', new FormControl('', []));
    console.log(this.formularioUsuario);
  }

}
