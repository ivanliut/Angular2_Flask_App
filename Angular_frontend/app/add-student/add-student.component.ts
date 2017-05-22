import { Component, OnInit } from '@angular/core';
import { Students_data } from '../students_data';
import { PostDataService } from "app/post-data.service";
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  another_student:Students_data;

  first_name;
  last_name;
  email;
  tel_number;
  in_group;

  constructor( 
    private _postDataService : PostDataService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onAdd(){

          console.log('Works');

          this.another_student  = {
            
            firstName: this.first_name,
            lastName: this.last_name,
            email: this.email,
            telNumber: this.tel_number,
            inGroup: this.in_group
          }; 

         this._postDataService.createStudent(this.another_student).subscribe(res => console.log(res.success));


  }


}
