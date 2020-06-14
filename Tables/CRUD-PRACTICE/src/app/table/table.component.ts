import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, UsersData } from './table-datasource';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddComponent } from './../../../../TABLECRUD/src/app/CRUD/add/add.component';
import { EditComponent } from './../../../../TABLECRUD/src/app/CRUD/edit/edit.component';
import { DeleteComponent } from './../../../../TABLECRUD/src/app/CRUD/delete/delete.component';
import { DataSource } from '@angular/cdk/collections';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './../dialog-box/dialog-box.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UsersData>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'action'];
  name: string;
  id: number;
  userData: UsersData[];
  newUser: any = {};

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new TableDataSource();
    }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        console.log(result.Data);
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(rowObj) {
    console.log(rowObj.id + ' ' + rowObj.name);
    this.userData.unshift({
      id: rowObj.id,
      name: rowObj.name
    });
    this.table.renderRows();
    alert('ADD ROW CALLED');
  }

  updateRowData(rowObj) {
    alert('UPDATE ROW CALLED');
  }

  deleteRowData(rowObj) {
    alert('DELETE ROW CALLED');
  }

  /*addRowData() {
    alert('add called');
    const dialogRef = this.dialog.open(AddComponent, {
      width: '250px',
      data: { id: this.id, name: this.name}
    });
    alert('add called');
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  updateRowData() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { id: this.id, name: this.name }
    });
    alert('Update called');
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.refresh();
      }
    });
  }
  deleteRowData() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: { id: this.id, name: this.name }
    });
    alert('Delete called');
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        console.log('The dialog was closed');
        this.name = result;
        this.refresh();
      }
    });
  }*/



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  refresh(){
    alert('Refreshed.');
  }

}
