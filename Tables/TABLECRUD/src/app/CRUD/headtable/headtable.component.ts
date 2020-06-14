import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HeadtableDataSource, HeadtableItem } from './headtable-datasource';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-headtable',
  templateUrl: './headtable.component.html',
  styleUrls: ['./headtable.component.css']
})
export class HeadtableComponent implements AfterViewInit, OnInit {


/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'phone', 'email', 'password'];
  /*exampleDatabase: DataService | null;*/
  dataSource: HeadtableDataSource;
  index: number;
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  constructor(public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<HeadtableItem>;



  ngOnInit() {
    this.dataSource = new HeadtableDataSource();
  }

  refresh(){
    alert('RELOAD CALLED');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addNew() {
    alert('ADD CALLED');
  }

  startEdit(){
    alert('EDIT CALLED');
  }
  deleteItem() {
    alert('DELETE CALLED');
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
