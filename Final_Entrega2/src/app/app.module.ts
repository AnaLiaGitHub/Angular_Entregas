import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosViewComponent } from './components/alumnos/alumnos-view/alumnos-view.component';
import { AlumnosAltaComponent } from './components/alumnos/alumnos-alta/alumnos-alta.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { DemoTableComponent } from './cursos/cursos-table/demo-table.component';
import { DemoCardsComponent } from './cursos/cursos-cards/demo-cards.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent,
    DemoCardsComponent,
    MenuLateralComponent,
    BooleanATextoPipe,
    BooleanoEstiloDirective,
    FiltroCursosPipe,
    ToolbarComponent,
    AlumnosViewComponent,
    AlumnosAltaComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AutenticacionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
