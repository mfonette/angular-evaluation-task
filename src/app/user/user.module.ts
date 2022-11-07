import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { CustomDatePipePipe } from '../custom-date-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UserComponent,
    CustomDatePipePipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    MatIconModule
  ],
  providers: [
  ],
})
export class UserModule { }
