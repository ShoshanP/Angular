import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',

})
export class StudentListComponent implements OnInit {

  students: Student[];//=this._StudentService.getStudents(); 
  selectedStudent: Student;
  deleteStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  editStudent(student) {
    this.selectedStudent = student;
  }
  saveStudentToList(studentToSave: Student) {

    if (studentToSave.id == 0) {

      console.log(studentToSave);
      console.log(this.students);
      studentToSave.id = this.students.length + 1;
      this.students.push(studentToSave);
      console.log(this.students);
    }
    else {
      let studentToUpdate = this.students.filter(x => x.id == studentToSave.id)[0];
      let index = this.students.indexOf(studentToUpdate);
      this.students[index] = studentToSave;
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
   this._StudentService.getStudentSlowly().then(res=>{this.students=res})
  }

}
