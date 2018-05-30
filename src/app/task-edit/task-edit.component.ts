import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskObj, IssueType } from '../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskData: TaskObj;
  issueTypes: IssueType[];
  constructor(private dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    this.taskData = {};
    this.issueTypes = [{ key: 'user-story', value: 'User Story' },
    { key: 'bug', value: 'Bug' },
    { key: 'task', value: 'Task' },
    { key: 'spike', value: 'Spike' }];
  }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.taskData = this.data;
    }
  }

  compareFn(task1: IssueType, task2: IssueType): boolean {
    return task1 && task2 ? task1.key === task2.key : task1 === task2;
  }

  cancel() {
    this.dialogRef.close();
  }

}
