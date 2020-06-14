import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddComponent } from './dailog/add/add.component';
import { DeleteComponent } from './dailog/delete/delete.component';
import { EditComponent } from './dailog/edit/edit.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@NgModule({
  declarations: [AppComponent, TableComponent, AddComponent, DeleteComponent, EditComponent, DialogBoxComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
  ],

  entryComponents: [
    AddComponent,
    DeleteComponent,
    EditComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
