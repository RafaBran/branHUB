import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botton-containner',
  templateUrl: './botton-containner.component.html',
  styleUrls: ['./botton-containner.component.scss'],
})
export class BottonContainnerComponent implements OnInit {
  cars: any[];

  constructor() {
    this.cars = [
      {
        name: 'Calculadora de notas UNIALFA',
        description: 'Projeto para ajudar os anunos a calcularem suas notas',
        imageUrl: '../../assets/calculadoraUnialfa.PNG',
        link: 'https://calculadora-unialfa.vercel.app/',
      },
      {
        name: 'Car 2',
        description: 'Description 2',
        imageUrl: '../../assets/forest-img.jpg',
        link: '../../assets/forest-img.jpg',
      },
      {
        name: 'Car 3',
        description: 'Description 3',
        imageUrl: '../../assets/forest-img.jpg',
        link: '../../assets/forest-img.jpg',
      },
    ];
  }
  ngOnInit(): void {}
}
