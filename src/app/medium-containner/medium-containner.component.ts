import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-containner',
  templateUrl: './medium-containner.component.html',
  styleUrls: ['./medium-containner.component.scss']
})
export class MediumContainnerComponent implements OnInit {

  private colors: string[] = ['color1', 'color2', 'color3'];
  private currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    element.className = this.colors[this.currentIndex];
  }

  onMouseLeave(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    element.className = this.colors[this.currentIndex];
  }

}
