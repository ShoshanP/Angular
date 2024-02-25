import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent, } from "./student-details/student-details.component";

import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./student.service";
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
    imports: [BrowserModule,ReactiveFormsModule,HttpClientModule],
    declarations: [AppComponent, StudentListComponent,StudentDetailsComponent, FormComponent],
    providers:[StudentService],
    bootstrap: [AppComponent]
})

export class AppModule{

}