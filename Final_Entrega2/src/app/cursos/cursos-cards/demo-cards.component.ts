import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-demo-cards',
  templateUrl: './demo-cards.component.html',
  styleUrls: ['./demo-cards.component.css']
})
export class DemoCardsComponent implements OnInit {
  filtro: string = '';
  cursos: Curso[] = [
    { nombre: 'Desarrollo Web', comision: '123456', profesor: 'Luis', fechaInicio: new Date(2022, 0, 1), fechaFin: new Date(2022, 1, 28), inscripcionAbierta: true, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
    { nombre: 'JavaScript', comision: '123457', profesor: 'Julieta', fechaInicio: new Date(2022, 1, 1), fechaFin: new Date(2022, 2, 31), inscripcionAbierta: false, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
    { nombre: 'Angular', comision: '123458', profesor: 'Edinson', fechaInicio: new Date(2022, 2, 1), fechaFin: new Date(2022, 2, 30), inscripcionAbierta: false, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
