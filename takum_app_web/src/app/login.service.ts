import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  validate(user: string,pass: string,role: string){
    let md5 = new Md5();
    return this.http.get(`http://localhost:3333/users/validate/${user}/${md5.appendAsciiStr(pass).end()}/${role}.json`)
  }
}
