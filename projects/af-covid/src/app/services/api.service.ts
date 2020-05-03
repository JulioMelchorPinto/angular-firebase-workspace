import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from '../models/cases';
import { Statistics } from '../models/statistics';
import { AngularFirestore } from '@angular/fire/firestore';

/* const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; */

const apiUrl = 'http://localhost:3000/cases';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //constructor(private http: HttpClient) { }
   constructor(private firestore: AngularFirestore){}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCases() {
    return this.firestore.collection('cases').snapshotChanges();
  }

  /* getCases(): Observable<Cases[]> {
    return this.http.get<Cases[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  } */

  getCasesById(id: string) {
    const url = `${apiUrl}/${id}`;
    return this.firestore.doc('cases/' + id);
  } 

  addCases(cases: Cases) {
    return this.firestore.collection('cases').add(cases);
  }

  /* addCases(cases: Cases): Observable<Cases> {
    return this.http.post<Cases>(apiUrl, cases, httpOptions).pipe(
      tap((c: Cases) => console.log(`added cases w/ id=${c.id}`)),
      catchError(this.handleError<Cases>('addCases'))
    );
  } */

  /* updateCases(id: string, cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  } */

  updateCases(id: string, cases: Cases) {
     const url = `${apiUrl}/${id}`;
     this.firestore.doc('cases/' + cases.id).update(cases);
  }

  /* deleteCases(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cases id=${id}`)),
      catchError(this.handleError<Cases>('deleteCases'))
    );
  } */

  deleteCases(id: string) {
    this.firestore.doc('cases/' + id).delete();
  }


  /* getStatistic(status: string): Observable<Statistics> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistics>(url).pipe(
      tap(_ => console.log(`fetched statistic status=${status}`)),
      catchError(this.handleError<Statistics>(`getStatistic status=${status}`))
    );
  } */



}
