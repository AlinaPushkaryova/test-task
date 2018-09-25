import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserList();

  }

  getUserList() {
    this.userService.getUsers()
      .subscribe(res => {
        console.log(res)
      })
  }

}
