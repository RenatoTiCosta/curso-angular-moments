import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = 'Maria';
  ager: number = 25;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car = {
    name:'Corola',
    year: 2023
  }


}
