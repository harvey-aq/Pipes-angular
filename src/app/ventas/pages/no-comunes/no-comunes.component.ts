import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Harvey';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Sara';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Harvey',
    edad: 19,
    direccion: 'Bogotá, Colombia'
  }

  // Json Pipe
  heroes = [{
    nombre: 'Superman',
    vuela: true
  },{
    nombre: 'Robin',
    vuela: false
  },{
    nombre: 'Aquaman',
    vuela: false
  }];

  // Async Pipe
  miObservable = interval(2000); // 1,2,3,4,5,6

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });

}
