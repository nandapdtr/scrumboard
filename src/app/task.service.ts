import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader-state';

import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  //Gets all the tasks from database

  getTasks(): Observable<Task[]> {
    this.loaderService.show();
    return this.http.get<Task[]>(this.url)
      .pipe(tap(() => this.hideLoader(),
        catchError(this.handleError<Task[]>('getTasks', []))));
  }

  //adds a tasks to database

  addTask(task: Task): Observable<Task> {
    this.loaderService.show();
    return this.http.post<Task>(this.url, task, httpOptions)
      .pipe(tap(() => this.hideLoader(),
      catchError(this.handleError<Task>('addTask', task))));
  }

  //Updates a task in databaese

  updateTask(task: Task): Observable<Task> {
    this.loaderService.show();
    let url = `${this.url}/${task._id}`;
    return this.http.put<Task>(url, task, httpOptions)
      .pipe(tap(() => this.hideLoader(),
      catchError(this.handleError<Task>('updateTask', task))));
  }

  //Deletes a task from database

  deleteTask(task: Task): Observable<Task> {
    this.loaderService.show();
    let url = `${this.url}/${task._id}`;
    return this.http.delete<Task>(url)
      .pipe(tap(() => this.hideLoader(),
      catchError(this.handleError<Task>('deleteTask', task))));
  }

  //Hides loading indicator

  hideLoader() {
    this.loaderService.hide();
  }

  //Error Handler

  private handleError<T>(operation, result?: T) {
    this.hideLoader();
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}
