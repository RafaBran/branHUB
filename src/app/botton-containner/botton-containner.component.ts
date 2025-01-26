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
        name: 'Laec UNIALFA',
        description: 'Projeto divulgação de informações e agendamento de aulas extras.',
        imageUrl: '../../assets/laecUNIALFAPNG.PNG',
        link: 'https://www.laecunialfa.com.br',
      },

    ];
  }
  ngOnInit(): void {}
}
