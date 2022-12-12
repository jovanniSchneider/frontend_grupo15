import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from "../Services/user/user.service";
import {RolService} from "../Services/rol/rol.service";
import {Rol} from "../Models/rol";
import {Sesion} from "../Models/sesion";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService, RolService]
})
export class LoginFormComponent {
  email: string | undefined;
  password: string | undefined;
  public rol : Rol;
  // public sesion: Sesion;

  constructor(
    private _userService: UserService,
    private _rolService: RolService
  ) {
    this.rol = new Rol(0,"noRol",null);
    // this.sesion = new Sesion(null, null);
  }

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
            case null:
              alert('Usuario no existe en la base de datos, registrese por favor');
              break;
            default:
              alert('Ingreso correcto al sistema');
              console.log(result);
              this._rolService.getRol(result).subscribe(result2 =>{
                this.rol = result2;
                console.log(this.rol.tipo_rol);
              },error => {
                console.log(<any>error);
              });
          }
        },
        error => {
          console.log(<any>error);
        }
      )
    }
  }

}
