import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TASKS } from '../mock-tasks';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  id: any;
  t: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.t = this.findByID(this.id);
  }
  findByID(id: any): any {
    return TASKS.find((obj) => obj.id == id);
  }
}
