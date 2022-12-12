import { Component } from '@angular/core';
import {UserService} from "./Services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  public registroView: boolean = true;
  public loginView: boolean = false;
  public buttonText: string = "Inicia sesión";
  public headerText: string = "¿Ya tienes una cuenta?"

  login(){
    this.registroView = false;
    this.loginView = true;
    this.buttonText = "Registrate";
    this.headerText = "¿No tienes una cuenta?"
  }
  register(){
    this.registroView = true;
    this.loginView = false;
    this.buttonText = "Inicia sesión";
    this.headerText = "¿Ya tienes una cuenta?";
  }
}
