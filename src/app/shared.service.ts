import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto, User } from './shared';
import { mockedData } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
usersData: UserDto[]

  constructor() { 
    this.usersData = mockedData;
  }
  
  getUsers(): Observable<User[]> {
    let userArray: User[]=[]

    // mapping the mokedData which is of type userDto to type/interface user
    this.usersData.forEach(data =>{
      let user : User = {
        id: data.id,
        role: data.role,
        name: data.old_name,
        surname: data.transformed_surname,
        dateOfBirth: data.date_of_birth,
        address: {
          postcode: data.address.post_code,
          street: data.address.sreet_name,
          houseNum: data.address.house_num
        }
      }
      userArray.push(user)
    })
        // to make the array an observable so that it could be subscribed to
  return of(userArray)
  }

}
