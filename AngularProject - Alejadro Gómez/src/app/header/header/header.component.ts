import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  color = 'black';

  color1 = "Cambio a Color ROJO";
  color2 = "Cambio a Color AZUL";
  color3 = "Cambio a Color VERDE";

  changeColorR() {
    this.color = 'red';
  }

  changeColorV() {
    this.color = 'green';
  }

  changeColorA() {
    this.color = 'blue';
  }

  unaFuncion() {  
    return this.color;  
  } 
  
}
