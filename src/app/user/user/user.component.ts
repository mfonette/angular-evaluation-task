import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { CustomDatePipePipe } from 'src/app/custom-date-pipe.pipe';
import { User } from 'src/app/shared';
import { SharedService } from 'src/app/shared.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'age', 'address'];
  name: string | undefined;
  age: number | undefined;
  hasFiltered: boolean = false;
  users: User[]=[];
  private unsubscribe: Subscription[] = [];
  allUsers$: MatTableDataSource<User> = new MatTableDataSource<User>()
   
  constructor(
    private shared: SharedService,
    private customdatePipe: CustomDatePipePipe
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
   const getUser = this.shared.getUsers().pipe(
      map((users) => {
        this.users = users;
        this.populateTable(users)
      })
    ).subscribe()
    this.unsubscribe.push(getUser)
  }

  populateTable(user: User[]) {
    // const userTable = user.map(user=> user)
    this.allUsers$ = new MatTableDataSource<User>(user)
  }

  // filter name and age
  filter() {
    let a = this._name;
    let b = this._age;
   const filteredUser = of(this.users).pipe(
      map(x => x.filter(  
        (data) => {
          if (b != undefined && a != undefined && a.length > 0) {
            return (data.name.includes(a.toLowerCase()) || this.customdatePipe.transform(data.dateOfBirth) == b)
          }
          else if (a != undefined && a.length > 0) {
            return data.name.includes(a.toLowerCase())
          }
          else if (b != undefined) {
            return this.customdatePipe.transform(data.dateOfBirth) == b
          }
          return false
        }
      ))).subscribe({
        next:e=>{
          this.populateTable(e)
        }
      })
    this.hasFiltered = true;
    this.unsubscribe.push(filteredUser)
  }

  // reset filter
  reset() {
    this.age = undefined;
    this.name = undefined;
    this.getData();
    this.hasFiltered = false;
  }

  // getting the value from html
  get _name(): string {
    if (this.name?.trim()?.length === 0) {
      this.name = undefined
    }
    return this.name
  }

  // setting the name from component
  set _name(val: string) {
    this.name = val;
  }

  get _age(): number {
    return this.age;
  }

  set _age(val: number) {
    this.age = val;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
