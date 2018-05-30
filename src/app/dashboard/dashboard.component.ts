import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TaskEditComponent } from '../task-edit/task-edit.component';

import { Task, TaskObj } from '../task';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  tasksData: Task[];
  tasks: TaskObj;
  taskHeaders: string[];

  private unSubscribe: Subject<any> = new Subject();

  constructor(private taskService: TaskService, private dialog: MatDialog) {
    this.taskHeaders = ['backlog', 'plan', 'develop', 'test', 'deploy', 'done'];
    this.tasks = {};
  }

  ngOnInit() {
    this.getTasks();
  }

  //Gets all the tasks
  getTasks() {
    console.log('get tasks')
    this.taskService.getTasks()
    .pipe(takeUntil(this.unSubscribe)).subscribe(result => {
      this.tasksData = result;
      console.log('inside getTasks', result);
      this.distTasks();
    });
  }

  //Distributes all the tasks into respective categories
  distTasks() {
    for (let status of this.taskHeaders) {
      this.tasks[status] = this.tasksData.filter(item => item.status === status);
    }
    console.log('inside distTasks', this.tasks);
  }

  //Opens a dialog to add new task
  openPopup() {
    let dialogRef = this.dialog.open(TaskEditComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      result && this.addTask(result);
    });
  }

  //Calls service to add new task into database
  addTask(task: Task) {
    task.taskId = Date.now();
    task.status = 'backlog';
    this.taskService.addTask(task)
    .pipe(takeUntil(this.unSubscribe)).subscribe(result => {
      console.log(result);
      this.tasks.backlog.push(result);
    },
      error => console.log(error));
  }


  //Method called from task list component after dropping the task
  dropped($event){
    console.log($event);
    console.log('before deleting', this.tasks[$event.value.prevStatus]);
    console.log('before inserting', this.tasks[$event.value.status]);
    let index = this.tasks[$event.value.prevStatus].findIndex((item)=>item.taskId === $event.value.taskId);
    this.tasks[$event.value.prevStatus].splice(index, 1);
    console.log('after deleting', this.tasks[$event.value.prevStatus]);
    delete $event.value.prevStatus;
    this.tasks[$event.value.status].splice($event.dropIndex, 0, $event.value);
    console.log('after inserting', this.tasks[$event.value.status]);
    console.log(index);
  }

  
  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.unsubscribe();
  }

}
