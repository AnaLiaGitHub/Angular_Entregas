import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoCardsComponent } from './components/demo-cards/demo-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosViewComponent } from './components/alumnos/alumnos-view/alumnos-view.component';

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
    AlumnosViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
