import { Component } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html'
})
export class ObservableComponent {

 students:Student[]=this.studentService.getStudents();
 studentsObs:Observable<Student>=new Observable((observer)=>{
this.students.map((s)=>{
  observer.next(s);
})
 })


studentsObsPipes=from(this.students);

/**
 *
 */
constructor(public studentService:StudentService) {
  this.studentsObs.subscribe((s)=>{
    console.log(s);
  })
  this.studentsObsPipes.pipe(map(s=>{console.log(s.firstName)}))
  
}
}
