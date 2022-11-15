import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.component.html',
  styleUrls: ['./generar-reporte.component.css']
})
export class GenerarReporteComponent implements OnInit {

  public formNuevoReporte!:FormGroup;
  public infoCliente: any = undefined;

  constructor(
    private fb:FormBuilder
  ) { }

  private createMyForm() : FormGroup{
    return this.fb.group({
      cliente:['', [Validators.required]],
      problema:['', [Validators.required]],
      descripcionProblema:['', [Validators.required]],
      observaciones:[]
    });
  }

  public clientes: any = [
     { cliente : '001', nombre: 'Cliente Uno', edad: '24', domicilio: 'Ocoyoacac', estado:'México', numeroCelular: '7228329384', cantidadReportes: '34', sexo:'M' },
     { cliente : '002', nombre: 'Cliente Dos', edad: '45', domicilio: 'Santiago', estado:'México', numeroCelular: '7228329384', cantidadReportes: '12', sexo:'F' },
  ];

  public problemaItems: any = [
    {value: 'p001', text: 'Poblacion Uno'},
    {value: 'p002', text: 'Poblacion Dos'},
  ];

  ngOnInit(): void {
    this.formNuevoReporte = this.createMyForm();
  }

  obtenerInfoCliente(): any {
    const cliente: any = this.formNuevoReporte.value.cliente;

    const clienteSeleccionado = this.clientes.filter((obj) => {
      return 'CIN'+obj.cliente === cliente;
    });

    this.infoCliente = clienteSeleccionado[0];
    console.log(this.infoCliente);
  }
  
  generarReporteSub(): any {
    console.log("this.formNuevoReporte.invalid");
    console.log(this.formNuevoReporte.invalid);
    console.log("this.formNuevoReporte.value");
    console.log(this.formNuevoReporte.value);
  }
  
  canVerInfoCliente(): boolean {
    return this.infoCliente != undefined;
  }

  canRegistrarReporte(): boolean {
    return this.formNuevoReporte.invalid;
  }
}
