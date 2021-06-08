import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMaysculas: boolean = false;
  funcion: string = 'Mayúsculas';
  ordenarPor: string = '';
  heroes: Heroe[] = [{
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },{
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },{
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },{
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },{
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }];

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    if(this.enMaysculas){
      this.funcion = 'Mayúsculas';
    } else {
      this.funcion = 'Minusculas';
    }
    this.enMaysculas = !this.enMaysculas;
  }

  cambiarOrden( value: string ) {
    this.ordenarPor = value;
  }

}
