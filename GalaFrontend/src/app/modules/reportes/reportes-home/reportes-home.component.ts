import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-reportes-home',
  templateUrl: './reportes-home.component.html',
  styleUrls: ['./reportes-home.component.css']
})
export class ReportesHomeComponent implements OnInit {

  public subscriber: Subscription

  constructor(
    private router: Router
  ) { }

  ngOnInit () {
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
       console.log('The URL changed to: ' + event['url'])
    });
 }

  //En el onDestroy, valido si mi subscriber sigue activo y me desuscribo, si no seguirá activo escuchando cuando navegues a otro componente donde no lo requieras.
 ngOnDestroy () {
    this.subscriber?.unsubscribe();
 }

}
