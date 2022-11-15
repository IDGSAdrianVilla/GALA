import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  public formNuevoCliente!:FormGroup;

  public poblaciones: any = [
    {codigo: '001', nombre: 'Población Uno'},
    {codigo: '002', nombre: 'Población Dos'},
    {codigo: '003', nombre: 'Población Tres'},
    {codigo: '004', nombre: 'Población Cuatro'},
  ];

  public infoClienteRe: any = [];

  constructor(
    private fb:FormBuilder
  ) { }

  private createMyForm() : FormGroup{
    return this.fb.group({
      nombreCliente:['',[Validators.required]],
      aPaterno:['',[Validators.required]],
      aMaterno:['',[Validators.required]],
      telefonoPrincipal:['',[Validators.required]],
      telefonoSecundario:[''],
      poblacion:['',[Validators.required]],
      coordenadas:[''],
      direccion:['',[Validators.required]],
      referencias:[''],
    });
  }

  ngOnInit(): void {
    this.formNuevoCliente = this.createMyForm();
  }

  mostrarInfoCard():any {
    this.infoClienteRe = this.formNuevoCliente.value;
    const poblacionSeleccionada = this.poblaciones.filter((obj) => {
      return obj.codigo === this.formNuevoCliente.value.poblacion;
    });
    this.infoClienteRe.nombrePoblacion = poblacionSeleccionada[0].nombre;

    console.log(this.infoClienteRe);
  }

  agregarCliente(): any {
    
  }

  canAgregarCliente(): boolean {
    return this.formNuevoCliente.invalid;
  }

}
