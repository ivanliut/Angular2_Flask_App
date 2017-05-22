import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrmComponent } from './crm/crm.component';
import { StudentsDetailsComponent } from 'students-details/students-details.component';
import { HomeComponent } from './home/home.component';

import { GetDataService } from "app/getData.service";
import { PostDataService } from "app/post-data.service";
import { SearchStudentsService } from "app/search-students.service";
import { GetIdService } from "app/get-id.service";
import { EditComponent } from './edit/edit.component';
import { UpdateService } from './update.service';
import { DeleteService } from './delete.service';
import { AuthService } from 'app/auth.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from 'app/auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [


    {path: "",
    component: HomeComponent
    },

    {path: "students",
    component: CrmComponent,
    canActivate: [AuthGuard]
    },
  
    {path: "students/:id",
    component: StudentsDetailsComponent,
    canActivate: [AuthGuard]
    },
    
    {path: "students/:id/edit/:id2",
    component: EditComponent,
      canActivate: [AuthGuard]
    },

     {path: "addStudent",
    component: AddStudentComponent,
    canActivate: [AuthGuard]
     }

]

@NgModule({
  declarations: [
    AppComponent,
    CrmComponent,
    StudentsDetailsComponent,
    HomeComponent,
    EditComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GetDataService, 
  PostDataService, 
  SearchStudentsService, 
  GetIdService, 
  UpdateService,
  DeleteService,
  AUTH_PROVIDERS,
  AuthService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
