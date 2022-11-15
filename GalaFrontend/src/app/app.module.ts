import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { GenerarReporteComponent } from './modules/reportes/generar-reporte/generar-reporte.component';
import { AgregarClienteComponent } from './modules/clientes/agregar-cliente/agregar-cliente.component';
import { ReportesHomeComponent } from './modules/reportes/reportes-home/reportes-home.component';
import { ClientesHomeComponent } from './modules/clientes/clientes-home/clientes-home.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    HomeComponent,
    ReportesHomeComponent,
    GenerarReporteComponent,
    AgregarClienteComponent,
    ClientesHomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
