import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[] = [];
  user:User;

  constructor(
    private usersvc:UserService,
    private systemsvc:SystemService,
  ) { }

  ngOnInit(): void {
    this.user = this.systemsvc.user;
    this.usersvc.list().subscribe(
      res => {
        this.users = res;
        console.debug("Listed Users:", res);
      },
      err => {console.error(err);}
    )
  }

}
