import { Component } from '@angular/core';
import {User} from "../Models/user";
import {Direccion} from "../Models/direccion";
import {DireccionService} from "../Services/direccion/direccion.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers:[DireccionService]
})
export class RegisterFormComponent {
  public email: string | undefined;
  public username: string | undefined;
  public password: string | undefined;

  public edad: number | undefined;
  public view: number | undefined;
  public direccion: {
    calle: string,
    numero: number,
    comuna: string,
    region: string
  }
  constructor() {
    this.direccion = {
      calle: "",
      numero: 0,
      comuna: "",
      region: ""
    }
  }

  onSubmit(){
    if (this.email == undefined || this.username == undefined || this.password == undefined || this.edad == undefined){
      alert("Complete todos los campos por favor");
    }else{
      let user = new User(this.username,this.email,this.password,this.edad,undefined,undefined);
      console.log(user);
      this.view = 1;
    }
  }
  crearDireccion(){
    alert("funcionando");
  }
}
