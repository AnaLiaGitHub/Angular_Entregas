import { NgModule } from "@angular/core";


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
      MatIconModule,
      MatDialogModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
      ],
  })
  
export class MaterialModule {

}