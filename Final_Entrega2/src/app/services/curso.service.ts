import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Curso, listaCursos } from '../models/curso';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  cursos: Curso[] = listaCursos;

  /* cursoObservable: Observable<Curso[]>;
  static obtenerCursoObservable: any; */
  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() { 
    this.cursosSubject = new BehaviorSubject(this.cursos);
    /* this.cursoObservable = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);
    }) */
  }

  /* obtenerCursosPromise(): Promise<Curso[] | any> {
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
  } */

  obtenerCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();
  }
}
