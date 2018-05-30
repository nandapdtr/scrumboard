import { Component, OnInit, Input, Output, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskService } from '../task.service';

import { Task, TaskObj } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() taskData: Task[];
  @Input() taskStatus: string;
  @Output() onDropped = new EventEmitter();

  private unSubscribe: Subject<any> = new Subject();

  constructor(private dialog: MatDialog, private taskService: TaskService) { }

  ngOnChanges() {
    console.log('onchanges in task-list', this.taskData);
  }

  ngOnInit() {
  }


  //opens a popup to edit the task
  editTask(task: Task, taskInd: number) {
    let dialogRef = this.dialog.open(TaskEditComponent, {
      width: '350px',
      data: Object.assign({}, task)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed in edit');
      console.log(result);
      if (result) {
        this.taskService.updateTask(result)
          .pipe(takeUntil(this.unSubscribe)).subscribe(res => {
            console.log('afterupdate task in mat-card', res);
            this.taskData[taskInd] = result;
          },
            error => console.log(error));
      }
    });
  }


  //deletes the selected task
  deleteTask(task: Task, taskInd) {
    console.log(task);
    this.taskService.deleteTask(task)
      .pipe(takeUntil(this.unSubscribe)).subscribe(result => {
        console.log(result);
        this.taskData.splice(taskInd, 1);
      },
        error => console.log(error));
  }


  //Method fires on dropping a task
  dropped($event) {
    console.log('dropping in task list');
    console.log(this.taskData);
    let eventData = $event;
    if (this.taskStatus !== eventData.value.status) {
      eventData.value.prevStatus = eventData.value.status;
      eventData.value.status = this.taskStatus;
      this.taskService.updateTask(eventData.value)
        .pipe(takeUntil(this.unSubscribe)).subscribe(res => {
          console.log('afterupdate task in mat-card', res);
          this.onDropped.emit(eventData);
        },
        error => console.log(error));
    }
  }

  //destroy event of this component
  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.unsubscribe();
  }
}
