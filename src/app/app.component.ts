import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics=['angular','React','vue'];
  topicHasError=true;
  userModel = new User('','abc@gmail.com',1233443,'default','morning',true);
  validateTopic(value)
  {
    if(value === 'default')
   this.topicHasError=true;
   else 
    this.topicHasError=false;
  }
  onSubmit()
  {
    console.log(this.userModel);
  }

}
