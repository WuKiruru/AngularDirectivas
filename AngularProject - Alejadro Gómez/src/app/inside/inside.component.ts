import { Component } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})

export class InsideComponent {
  camino1 = "DEPARTURES";
  camino2 = "ARRIVALS";

  imgArr = '../../../assets/resources/arrivals.png';
  imgDep = '../../../assets/resources/departure.png';
}