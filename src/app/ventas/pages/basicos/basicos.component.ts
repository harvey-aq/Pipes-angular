import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'harvey';
  nombreUpper: string = 'HARVEY';
  nombreCompleto: string = 'hArVeY aRéVaLo';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
