import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface HeadtableItem {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: HeadtableItem[] = [
  {id: 1, name: 'Hydrogen', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 2, name: 'Helium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 3, name: 'Lithium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 4, name: 'Beryllium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 5, name: 'Boron', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 6, name: 'Carbon', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 7, name: 'Nitrogen', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 8, name: 'Oxygen', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 9, name: 'Fluorine', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 10, name: 'Neon', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 11, name: 'Sodium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 12, name: 'Magnesium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 13, name: 'Aluminum', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 14, name: 'Silicon', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 15, name: 'Phosphorus', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 16, name: 'Sulfur', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 17, name: 'Chlorine', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 18, name: 'Argon', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 19, name: 'Potassium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
  { id: 20, name: 'Calcium', phone: '9878987898', email: 'yash@gmail.com', password: 'Prograd9$'},
];

/**
 * Data source for the Headtable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HeadtableDataSource extends DataSource<HeadtableItem> {
  data: HeadtableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<HeadtableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: HeadtableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: HeadtableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
