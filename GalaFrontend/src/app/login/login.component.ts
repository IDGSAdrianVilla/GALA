import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  test: Date = new Date();
  public isCollapsed = true;
  public formLogin!:FormGroup;

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private login:LoginService
  ) { }

  ngOnInit() {
    this.formLogin = this.createMyForm();
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

  private createMyForm() : FormGroup{
    return this.fb.group({
      correo:['', [Validators.required]],
      pass:['', [Validators.required]]
    });
  }

  public envioLogin () {
    console.log("dentro");
    if ( this.formLogin.invalid ) {
      Object.values( this.formLogin.controls ).forEach(control => {
        control.markAllAsTouched();
      });

      return;
    }
 
    if (!this.login.login(this.formLogin.value)) {
      alert("Usuario invalido");
    }
  }

  public get f () : any {
    return this.formLogin.controls;
  }

}
