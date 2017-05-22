import { Component, OnInit } from '@angular/core';
import { GetIdService } from "app/get-id.service";
import { ActivatedRoute } from '@angular/router';
import { Students_data } from '../students_data';
import { UpdateService } from "app/update.service";
import { AuthService } from 'app/auth.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  private id2;
  first_name;
  last_name;
  email;
  tel_number;
  in_group;

  
  update_student:Students_data;

  constructor(
    private getIdService : GetIdService,
    private route : ActivatedRoute,
    private updateService : UpdateService,
    private authService: AuthService
    ) { }

  ngOnInit() {

        // let's get id2 from route parameters and the info associated from backend endpoint
        this.route.params
        .map(params => params['id2'])
        .subscribe((id2) => {
            this.id2 = id2;
            this.getIdService.getDetails(id2).subscribe(students_data =>{
             
                this.first_name = students_data[0].first_name;
                this.last_name = students_data[0].last_name;
                this.email = students_data[0].email;
                this.tel_number = students_data[0].tel_number;
                this.in_group = students_data[0].in_group;
                this.id2 = students_data[0].id;

          });
        })
  }

  onEdit(){

          console.log('Works');

          this.update_student  = {
            
            firstName: this.first_name,
            lastName: this.last_name,
            email: this.email,
            telNumber: this.tel_number,
            inGroup: this.in_group
          }; 

          this.updateService.updateStudent(this.id2, this.update_student)
          .subscribe(res => console.log(res.success));

  }

}
