import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { HomeComponent } from '../../modules/home/home.component';
import { GenerarReporteComponent } from '../../modules/reportes/generar-reporte/generar-reporte.component';
import { ReportesHomeComponent } from '../../modules/reportes/reportes-home/reportes-home.component';
import { AgregarClienteComponent } from '../../modules/clientes/agregar-cliente/agregar-cliente.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',                     component: HomeComponent },
    { path: 'reportesHome/:status',     component: ReportesHomeComponent },
    { path: 'generarReporte',           component: GenerarReporteComponent},
    { path: 'agregarCliente',           component: AgregarClienteComponent},
    
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'user-profile',             component: UserProfileComponent },
    { path: 'tables',                   component: TablesComponent },
    { path: 'icons',                    component: IconsComponent },
    { path: 'maps',                     component: MapsComponent }
];
