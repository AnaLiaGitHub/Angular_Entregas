export interface Curso {
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    inscripcionAbierta: boolean;
    imagen: string
}

export let listaCursos: Curso[] = [
    {
        nombre: 'Desarrollo de Aplicaciones',
        comision: '111111',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Sergio Rochet',
        inscripcionAbierta: true,
        imagen: ''
      },
      {
        nombre: 'Desarrollo Web',
        comision: '111112',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Luis Suarez',
        inscripcionAbierta: true,
        imagen: ''
      },
      {
        nombre: 'Desarrollo de Aplicaciones',
        comision: '111113',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Edinson Cavani',
        inscripcionAbierta: true,
        imagen: ''
      }
]