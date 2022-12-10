import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService]
})
export class LoginFormComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(
    private _userService: UserService
  ) {}

  onSubmit() {
    if (this.email == undefined || this.password == undefined)
      alert('Complete todos los campos por favor');
    else {
      this._userService.matchUser({
        email: this.email,
        password: this.password
      }).subscribe(
        result => {
          switch (result) {
            case 0:
              alert('Usuario no existe en la base de datos, registrese por favor');
              break;
            case -1:
              alert('Contraseña incorrecta, vuelva a intentarlo');
              break;
            default:
              console.log(result);
          }
        },
        error => {
          console.log(<any>error);
        }
      )
    }
  }

}
