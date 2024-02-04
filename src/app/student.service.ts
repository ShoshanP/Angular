import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";
import { count } from "rxjs";
@Injectable()
export class StudentService {
  getStudents(): Student[] {
    return [
      { id: 1, firstName: "Moshe", lastName: "Levi", address: { city: "bnei brak", street: "Ezra", num: 10 }, phone: "035774455", isActive: true, averageMarks: 85, dateLeave: new Date() },
      { id: 2, firstName: "David", lastName: "Cohen", address: { city: "Jerusalem", street: "Bar Ilan", num: 35 }, phone: "025458785", isActive: true, averageMarks: 100, dateLeave: new Date() },
      { id: 3, firstName: "Dan", lastName: "Shapira", address: { city: "Heifa", street: "Kalanit", num: 15 }, phone: "045578851", isActive: false, averageMarks: 90, dateLeave: new Date() },
      { id: 4, firstName: "Yair", lastName: "Posen", address: { city: "bnei brak", street: "Pardo", num: 20 }, phone: "03654789", isActive: true, averageMarks: 95, dateLeave: new Date() }
    ]
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
    
    return this.getStudents().find(s=>s.id==id).averageMarks;
  }
  getCountLessDays(id:number):number{
    console.log("id",id)
    let count:number
    let lessDay=this.getStudents().find(s=>s.id==id)?.lassDays;
    console.log("less days",lessDay);
    if(lessDay)
    {
      lessDay.map(ld=>count+=ld.numOfDays);
      console.log("count",count);
      return count;
    }
    console.log("count",count);

    return 0;
    
  }
}



