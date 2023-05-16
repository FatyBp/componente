import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  public personajes:Personaje [] =[
    {nombre : "Goku", poder : 20000}
  ];
  public obtenerNuevoPersonaje(personaje:Personaje) : void {
    this.personajes.push({...personaje});
    console.log({personaje});
    console.log(this.personajes);
  }
}
