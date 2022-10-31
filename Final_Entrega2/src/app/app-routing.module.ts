import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from './components/inicio/inicio.component';
import { DemoCardsComponent } from './cursos/cursos-cards/demo-cards.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { MenuLateralComponent } from "./components/menu-lateral/menu-lateral.component";
import { listaAlumnos } from './models/alumnos';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './cursos/components/editar-curso/editar-curso.component';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';

const rutas: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: "full" },
    { path: 'cursos', component: DemoCardsComponent, children: [
        { path:'listar', component: ListaCursosComponent},
        { path:'editar', component: EditarCursoComponent},
        { path: 'agregar', component: AgregarCursoComponent}
    ] },
    { path: 'inicio', component: MenuLateralComponent },
    { path: '**', component: PaginaNoEncontradaComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}