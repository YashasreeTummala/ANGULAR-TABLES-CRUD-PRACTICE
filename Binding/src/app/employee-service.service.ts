import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService 
{
  private _url: string = "A:\DOWNLOADS_PERSONAL\INTERESTED_IN\PROGRAD-FACE\SPRINT-3 PART-1\PRACTICE\ANGULAR-CODEVOLUTION\Binding\src\assets\data\employee.json";

  constructor(private http:HttpClient) { }
  
  getEmployee() : Observable<IEmployee[]> 
  {
    return this.http.get<IEmployee[]> (this._url).pipe(tap(data => alert (JSON.stringify(data))), catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) 
  {
    return observableThrowError(error.message || "Server Error");
  }
}
