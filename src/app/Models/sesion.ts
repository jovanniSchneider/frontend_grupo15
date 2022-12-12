import {User} from "./user";
import {Rol} from "./rol";

export class Sesion{

  constructor(
    public user: User,
    public rol: Rol
  ) {}
}
