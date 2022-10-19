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
import { ReactiveFormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from "@angular/common";

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
      MatListModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      CdkTableModule,
      CommonModule
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
        MatListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CdkTableModule,
        CommonModule
      ],
  })
  
export class MaterialModule {

}