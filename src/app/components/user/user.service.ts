
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  userUrl = './../../users.json';

  getUsers() {
    return this.http.get(this.userUrl)
  }
}

