import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    title: string;
    icon: string;
    class: string;
    subRoutes: any;
}

export const ROUTES: RouteInfo[] = [
  { title: 'Reportes',      icon:'ni-money-coins text-blue',  class: '', subRoutes : [
    { path : '/generarReporte',           title : 'Generar Reporte' },
    { path : '/reportesHome/pendientes',  title : 'Reportes Pendientes' },
    { path : '/reportesHome/atendidos',   title : 'Reportes Atendidos' },
  ]},
  { title: 'Instalaciones', icon:'ni-settings text-orange',   class: '', subRoutes : [
    { path : '/generarInstalacion',           title : 'Generar Instalación' },
    { path : '/instalacionesHome/pendientes', title : 'Instalaciones Pendientes' },
    { path : '/instalacionesHome/atendidas',  title : 'Instalaciones Atendidas' },
  ]},
  { title: 'Clientes',      icon:'ni-single-02 text-yellow',  class: '', subRoutes : [
    { path : '/agregarCliente', title : 'Agregar Cliente' },
    { path : '/clientesHome',   title : 'Ver Clientes' },
  ]},
  { title: 'Insumos',       icon:'ni-atom text-primary',      class: '', subRoutes : [
    { path : '/agregarPoblacion',        title : 'Agregar Población' },
    { path : '/agregarProblema',         title : 'Agregar Problema' },
    { path : '/agregarRol',              title : 'Agregar Rol' },
    { path : '/insumosHome/poblaciones', title : 'Ver Poblaciones' },
    { path : '/insumosHome/problemas',   title : 'Ver Problemas' },
    { path : '/insumosHome/roles',       title : 'Ver Roles' },
  ]},
];

/*export const ROUTESOLD: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];*/

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public subMenuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
