import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoCardsComponent } from './components/demo-cards/demo-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent,
    DemoCardsComponent,
    BooleanATextoPipe,
    BooleanoEstiloDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
