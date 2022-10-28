import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso, listaCursos } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos: Curso[] = listaCursos;

  cursoObservable: Observable<Curso[]>;
  static obtenerCursoObservable: any;

  constructor() { 
    this.cursoObservable = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);
    })
  }

  obtenerCursosPromise(): Promise<Curso[] | any> {
    return new Promise((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve(this.cursos);
      } else {
        reject ({
          codigo: 0,
          mensaje: 'No hay cursos disponibles.'
        })
      }
    })
  }

  obtenerCursoObservable() {
    return this.cursoObservable;
  }
}
