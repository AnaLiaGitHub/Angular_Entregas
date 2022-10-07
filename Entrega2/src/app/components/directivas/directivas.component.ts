import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  
  listaNombres: Array<Persona> = [
    {nombre:'Evangelina', edad: 24},
    {nombre:'Emiliano', edad: 20},
    {nombre:'Julieta', edad: 22},
    {nombre:'Santiago', edad: 16}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
