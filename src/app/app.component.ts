import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics=['angular','React','vue'];
  userModel = new User('','abc@gmail.com',1233443,'','morning',true);
}
