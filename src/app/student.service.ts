import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class StudentService {
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://localhost:7000/api/Students');
  }
  getStudentSlowly(): Promise<Student[]> {
    return new Promise((res, rej) => {
      setTimeout(()=>
      res([
        { id: 1, firstName: "Moshe", lastName: "Levi", address: { city: "bnei brak", street: "Ezra", num: 10 }, phone: "035774455", isActive: true, averageMarks: 85, dateLeave: new Date() },
        { id: 2, firstName: "David", lastName: "Cohen", address: { city: "Jerusalem", street: "Bar Ilan", num: 35 }, phone: "025458785", isActive: true, averageMarks: 100, dateLeave: new Date() },
        { id: 3, firstName: "Dan", lastName: "Shapira", address: { city: "Heifa", street: "Kalanit", num: 15 }, phone: "045578851", isActive: false, averageMarks: 90, dateLeave: new Date() },
        { id: 4, firstName: "Yair", lastName: "Posen", address: { city: "bnei brak", street: "Pardo", num: 20 }, phone: "03654789", isActive: true, averageMarks: 95, dateLeave: new Date() }
      ]),5000)
    })
  }

  getAvgMark(id: number): number{
    return 5;
    //return this.getStudents().find(s=>s.id==id).averageMarks;
  }

  /**
   *
   */
  constructor(public http:HttpClient) {
   
    
  }

 
}



