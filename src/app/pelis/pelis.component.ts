import { Component } from '@angular/core';
import { Peli } from '../peli';
import { PELIS } from '../lista-pelis';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css'],
})
export class PelisComponent {
  pelis = PELIS;
  selectedPeli?: Peli;

  onSelect(peli: Peli): void {
    this.selectedPeli = peli;
  }
}
