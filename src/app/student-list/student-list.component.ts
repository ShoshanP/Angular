import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',

})
export class StudentListComponent implements OnInit {

  students: Student[];
  selectedStudent: Student;
  deleteStudent(student) {
    this._StudentService.http.delete(`https://localhost:7000/api/Students/${student.id}`)
      .subscribe(() => {
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
      console.log("ggg");
      })

  }
  editStudent(student) {
    this.selectedStudent = student;
  }

  saveStudentToList(studentToSave: Student) {

    if (studentToSave.id == 0) {
      console.log("im going to add new student! ",studentToSave);
      studentToSave.id = this.students.length + 1;
      this._StudentService.http.post('https://localhost:7000/api/Students', studentToSave)
        .subscribe(data => {
           this.students.push(studentToSave); 
           console.log("i added this student: ",studentToSave);
          });
    }
    else {
      this._StudentService.http.put(`https://localhost:7000/api/Students/${studentToSave.id}`, studentToSave)
        .subscribe(data => { this._StudentService.getStudents().subscribe(data => this.students = data) })
      // let studentToUpdate = this.students.filter(x => x.id == studentToSave.id)[0];
      // let index = this.students.indexOf(studentToUpdate);
      // this.students[index] = studentToSave;
    }
    this.selectedStudent = null;
  }
  addNewStudent() {
    this.selectedStudent = new Student();

  }


  /**
   *
   */
  constructor(private _StudentService: StudentService) {


  }
  ngOnInit(): void {
    //  this._StudentService.getStudentSlowly().then(res=>{this.students=res})
    this._StudentService.getStudents().subscribe(st => { this.students = st, console.log(st) }, err => { console.log(err, " "); });

  }

}
