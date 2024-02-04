
import { Component } from "@angular/core"

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent{
    title: string="lesson 5";
    date: Date=new Date();
  timeNow(){
if(this.date.getHours()<6)
    return "לילה טוב!";
else
    if(this.date.getHours()<12)
return "בוקר טוב!"
else if(this.date.getHours()<19)
return "צהריים טובים!!"
return "ערב טוב!!"
  }
        
   
    

 
}