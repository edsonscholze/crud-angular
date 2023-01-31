import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {

  formCourse = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private courseService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

    const course: Course = this.route.snapshot.data['course'];
    this.formCourse.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });

  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    this.courseService.save(this.formCourse.value).subscribe(
      (result) => this.onSuccess('Curso salvo com sucesso'),
      (error) => this.onError('Erro ao salvar curso')
    );
  }

  private onError(msg:string) {
    this.snackBar.open(msg, 'Atenção!', {duration:3000}) ;
  }

  private onSuccess(msg:string) {
    this.snackBar.open(msg, 'Sucesso!', {duration:3000}) ;
    this.onCancel();
  }
}
