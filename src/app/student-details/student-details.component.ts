import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../models/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { courses } from '../models/courses.model';
import { LessDays } from '../models/lessDays.model';
import { StudentService } from '../student.service';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',

})
export class StudentDetailsComponent {
  coursesArr: { id: number, name: string }[] = [
    { id: 1, name: "tichnut" },
    { id: 2, name: "author" },
    { id: 3, name: "librarian" },
    { id: 4, name: "KindergartenTeacher" },
    { id: 5, name: "CPA" }
];
  private _myStudent: Student;
  dateLess: Date;
  numOfLessDays: number;
  studentForm: FormGroup;
  countLessDays:number=this.StudentService.getCountLessDays(this.myStudent?.id)

  @ViewChild('numOfLessDays', { static: false }) numOfLessDaysInput: ElementRef;
  @ViewChild('dateLess', { static: false }) dateLessInput: ElementRef;


  public get myStudent(): Student {
    return this._myStudent;
  }
  @Input()
  public set myStudent(value: Student) {
    this._myStudent = value;
    this.studentForm = new FormGroup({
      "id": new FormControl(this.myStudent?.id),
      "firstName": new FormControl(this.myStudent?.firstName, [Validators.required]),
      "lastName": new FormControl(this.myStudent?.lastName, [Validators.required]),
      "phone": new FormControl(this.myStudent?.phone, [Validators.required]),
      "averageMarks": new FormControl(this.myStudent?.averageMarks),
      "courses": new FormControl(this.myStudent?.course)
    })
  }

  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter()

  @Output()
  onFirstFocus: EventEmitter<Student> = new EventEmitter();
  firstFocusEmitted: boolean = false;

  inputFocus() {
    if (!this.firstFocusEmitted) {
      this.onFirstFocus.emit();
      this.firstFocusEmitted = true;
    }
  }
  saveNewStudent() {
    const numOfLessDaysValue = this.numOfLessDaysInput.nativeElement.value;
    const dateLessValue = this.dateLessInput.nativeElement.value;
  console.log(numOfLessDaysValue)
  console.log(dateLessValue)
   
    this.myStudent.id = this.studentForm.controls['id'].value;
    this.myStudent.firstName = this.studentForm.controls['firstName'].value;
    this.myStudent.lastName = this.studentForm.controls['lastName'].value;
    this.myStudent.phone = this.studentForm.controls['phone'].value;
    this.myStudent.averageMarks = this.studentForm.controls['averageMarks'].value;
    this.myStudent.course = this.studentForm.controls['courses'].value;
    console.log(this.myStudent.lassDays)
    if(this.myStudent.lassDays){
      this.myStudent.lassDays.push(new LessDays(dateLessValue,numOfLessDaysValue))
    }
    else{
      this.myStudent.lassDays = [(new LessDays(dateLessValue,numOfLessDaysValue))]
    }
    console.log(this.myStudent.lassDays)

    this.onSaveStudent.emit(this.myStudent);
  }

  ngOnInit() {
  }

  /**
   *
   */
  constructor(public StudentService:StudentService) {
    
  }
}
