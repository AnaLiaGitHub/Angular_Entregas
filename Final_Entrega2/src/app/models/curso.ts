export interface Curso {
    id: number;
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
        id:1,
        nombre: 'Desarrollo de Aplicaciones',
        comision: '111111',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Sergio Rochet',
        inscripcionAbierta: true,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
      },
      {
        id:2,
        nombre: 'Desarrollo Web',
        comision: '111112',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Luis Suarez',
        inscripcionAbierta: true,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
      },
      {
        id:3,
        nombre: 'Desarrollo de Aplicaciones',
        comision: '111113',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        profesor: 'Edinson Cavani',
        inscripcionAbierta: true,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
      }
]