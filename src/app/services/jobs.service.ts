import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IJobs } from '../models/IJobs';
@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  public getAllCountry(): Observable<IJobs[]> {
    let dataUrl: string = `https://64281ee346fd35eb7c4bfc31.mockapi.io/dev`;
    return this.httpClient
      .get<IJobs[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
