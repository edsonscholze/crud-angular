import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Course[]{
    return [{_id:'1', name:'Angular', category:'Front-end'},
    {_id:'2', name:'Spring', category:'Back-end'},
    {_id:'3', name:'Spring Boot 3', category:'Back-end'}]
  }
}
