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
  
  // mokedData: UserDto[] = [
  //     {
  //     id: '1',
  //     role: 'admin',
  //     old_name: 'mfon',
  //     transformed_surname: 'ette',
  //     date_of_birth: '2020-08-04',
  //     address: {
  //       post_code: '123',
  //       sreet_name: 'license street',
  //       house_num: '10'
  //     }
  //   },
  //   {
  //     id: '2',
  //     role: 'admin',
  //     old_name: 'dunsin',
  //     transformed_surname: 'ariyo',
  //     date_of_birth: '2015-08-04',
  //     address: {
  //       post_code: '123',
  //       sreet_name: 'wilsons street',
  //       house_num: '7'
  //     }
  //   },
  //   {
  //     id: '3',
  //     role: 'admin',
  //     old_name: 'gabriel',
  //     transformed_surname: 'tg',
  //     date_of_birth: '1999-08-04',
  //     address: {
  //       post_code: '123',
  //       sreet_name: 'citec street',
  //       house_num: '3'
  //     }
  //   },
  //   {
  //     id: '4',
  //     role: 'admin',
  //     old_name: 'flora',
  //     transformed_surname: 'ette',
  //     date_of_birth: '1960-08-04',
  //     address: {
  //       post_code: '123',
  //       sreet_name: 'goldies street',
  //       house_num: '1'
  //     }
  //   },
  // ]

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
