import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent, } from "./student-details/student-details.component";

import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./student.service";
import { ObservableComponent } from './observable/observable.component';



@NgModule({
    imports: [BrowserModule,ReactiveFormsModule],
    declarations: [AppComponent, StudentListComponent,StudentDetailsComponent, FormComponent, ObservableComponent],
    providers:[StudentService],
    bootstrap: [AppComponent]
})

export class AppModule{

}