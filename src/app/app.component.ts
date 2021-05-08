import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dumb calculator';
  num1: number;
  num2: number;
  result: number;
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }
  add() {
    this.result = this.num1 + this.num2;
  }
  sub() {
    this.result = this.num1 - this.num2;
  }
  mul() {
    this.result = this.num1 * this.num2;
  }
  div() {
    this.result = this.num1 / this.num2;
  }
  mod() {
    this.result = this.num1 % this.num2;
  }
}
