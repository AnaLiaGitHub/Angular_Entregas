export interface Alumno {
    id: number
    nombre: string
    apellido: string
    telefono: number
    email: string
}

export let listaAlumnos: Alumno[] = [
    {
        id: 1,
        nombre: 'Evangelina',
        apellido: 'Márquez',
        telefono: 123456789,
        email: 'emarquez@gmail.com'

    },
    {
        id: 2,
        nombre: 'Julieta',
        apellido: 'Soumastre',
        telefono: 123456790,
        email: 'jsoumastre@gmail.com'


    },
    {
        id: 3,
        nombre: 'Emiliano',
        apellido: 'Matatelo',
        telefono: 123456791,
        email: 'ematatelo@gmail.com'


    },
    {
        id: 4,
        nombre: 'Santiago',
        apellido: 'Fernández',
        telefono: 123456792,
        email: 'sfernandez@gmail.com'


    },
    {
        id: 5,
        nombre: 'Franchesca',
        apellido: 'Zapata',
        telefono: 123456793,
        email: 'fzapata@gmail.com'


    },
]
