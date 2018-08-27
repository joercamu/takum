import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formSubmited = false;
  datalogin: any; 
  constructor(private loginService: LoginService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if(form.value.user != "" && form.value.pass != "" && form.value.role != ""){
      this.formSubmited = true;
      this.loginService.validate(form.value.user,form.value.pass, form.value.role )
      .subscribe((data: any)=>{
        if(data.status == 200){
          this.datalogin = JSON.parse(data._body);
          localStorage.setItem('user', this.datalogin.user);
          localStorage.setItem('role', this.datalogin.role);
          this.router.navigate(['/inicio']);
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
