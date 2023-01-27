import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {

  courses: Course[]
  displayedColumns = ['name', 'category'];

  constructor(private coursesService:CoursesService) {
    this.courses = this.coursesService.findAll();
  }

  mgOnInit(): void {}
}
