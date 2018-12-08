
import { Injectable } from '@angular/core';

@Injectable()
export class User {  
    FullName: string;
    UserName: string;
    Password: string;
    Email: string;
    BirthDate: Date;
  
    constructor(userJson: any) {
      this.FullName = userJson.FullName;
      this.UserName = userJson.UserName;
      this.Password = userJson.Password;
      this.Email = userJson.Email;
      this.BirthDate = userJson.BirthDate;
    }
  } 
  