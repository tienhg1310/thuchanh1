import { Component } from '@angular/core';

import { TASKS } from '../mock-tasks';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = TASKS

}
