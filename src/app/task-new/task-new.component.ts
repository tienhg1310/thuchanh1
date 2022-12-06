import { Component , OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})

export class TaskNewComponent implements OnInit {
  newForm = this.fb.group({
    title: [''],
    content: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.newForm.value);
    }

}
