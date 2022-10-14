import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/moduls/curso';

@Component({
  selector: 'app-demo-cards',
  templateUrl: './demo-cards.component.html',
  styleUrls: ['./demo-cards.component.css']
})
export class DemoCardsComponent implements OnInit {

  cursos: Curso[] = [
    { nombre: 'Desarrollo Web', comision: '123456', profesor: 'Luis', fechaInicio: new Date(2022, 0, 1), fechaFin: new Date(2022, 1, 28), inscripcionAbierta: true, imagen: './img/luis.jpg'},
    { nombre: 'JavaScript', comision: '123457', profesor: 'Julieta', fechaInicio: new Date(2022, 1, 1), fechaFin: new Date(2022, 2, 31), inscripcionAbierta: false, imagen: './img/julieta.jpg'},
    { nombre: 'Angular', comision: '123458', profesor: 'Edinson', fechaInicio: new Date(2022, 2, 1), fechaFin: new Date(2022, 2, 30), inscripcionAbierta: false, imagen: './img/edinson.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
