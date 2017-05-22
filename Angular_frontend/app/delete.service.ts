import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class DeleteService {

  private studentsDataUrl = 'http://127.0.0.1:5000/deleteStudent?';

  constructor(
    private http: Http,
    private router: Router,
    private flashMessagesService: FlashMessagesService
    ) { }


  deleteStudent(id): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
     

      const a_new_student = 'id=' +  id;
      this.flashMessagesService.show('You have successfully deleted the student!', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['/']);
      return this.http.post(this.studentsDataUrl + a_new_student, options)
                    .map(res => res.json());
                    

  }



}
