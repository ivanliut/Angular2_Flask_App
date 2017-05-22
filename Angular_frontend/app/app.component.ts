import { Component } from '@angular/core';
import {CrmComponent} from './crm/crm.component';
import { GetDataService } from './getData.service';
import { PostDataService } from "app/post-data.service";
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService, PostDataService, AuthService]
})
export class AppComponent {

  constructor(private auth:AuthService){
        
    }

  title = 'app works!';
}
