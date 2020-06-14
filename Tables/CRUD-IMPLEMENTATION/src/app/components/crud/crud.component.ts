import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CrudDataSource, CrudItem } from './crud-datasource';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CrudItem>;
  listData: CrudDataSource;  /* This is referenced in Line 2 of HTML (This is user-defined dataSource)*/


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'actions'];
  searchKey: string;
  ngOnInit() {
    this.listData = new CrudDataSource();
  }

  ngAfterViewInit() {
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.table.dataSource = this.listData;
  }

  onSearchClear(){
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter(){
    /*this.listData.filter = this.searchKey.trim().toLowerCase();*/
  }
}
