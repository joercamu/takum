import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){

  }
  title = 'takum';
  logout(){
    console.log("cerrando sesión...");
    localStorage.clear();
    this.router.navigate(['/entrar'])

  }
}
