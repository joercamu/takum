import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formSubmited = false;
  datalogin: any; 
  constructor(private http: Http, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(form: NgForm){
    let md5 = new Md5();
    if(form.value.user != "" && form.value.pass != "" && form.value.role != ""){
      this.formSubmited = true;
      this.http.get(`http://localhost:3333/users/validate/${form.value.user}/${md5.appendAsciiStr(form.value.pass).end()}/1.json`)
      .subscribe((data: any)=>{
        if(data.status == 200){
          this.datalogin = JSON.parse(data._body);
          localStorage.setItem('user', this.datalogin.user);
          localStorage.setItem('role', this.datalogin.role);
          this.router.navigate(['/home']);
        }else{
          this.snackBar.open("Uppss las credenciales proporcionadas no son correctas...");
          this.formSubmited = false;
        }
      },(data: any)=>{
          this.snackBar.open("Uppss tenemos problemas al iniciar sesión...");
          this.formSubmited = false;
          form.resetForm();
      })
    }
    
    
  }
}
