import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ingresar: boolean = false;

  constructor() { }

  public login ( credenciales:any ) : boolean {
    this.ingresar = credenciales.correo == 'villa.isc.tec@gmail.com' && credenciales.pass == 'oracle:1234' ? true : false;
    return this.ingresar;
  }

  public habilitarLogeo () {
    return this.ingresar;
  }
}
