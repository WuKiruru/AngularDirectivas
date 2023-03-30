import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {

  llegadas = "Arrivals";
  salidas = "Departures";

  option1 = "Time";
  option2 = "Destination";
  option3 = "Flight";
  option4 = "Gate";

  vuelos = [
    {Time: '12:39', Destination:'Berlin', Flight: 'BA903', Gate: 31},
    {Time: '12:57', Destination:'Sydney', Flight: 'QF5723', Gate: 27},
    {Time: '13:08', Destination:'Toronto', Flight: 'AC5984', Gate: 22},
    {Time: '13:21', Destination:'Barcelona', Flight: 'IB3941', Gate: 11},
    {Time: '13:21', Destination:'Madrid', Flight: 'AZ1903', Gate: 23},
    {Time: '13:21', Destination:'Barcelona', Flight: 'IB3942', Gate: 31},
    {Time: '13:27', Destination:'Tel Aviv', Flight: 'VG3941', Gate: 15},
    {Time: '13:45', Destination:'Valencia', Flight: 'IB3951', Gate: 27},
    {Time: '14:02', Destination:'Barcelona', Flight: 'IB3943', Gate: 33},
    {Time: '14:21', Destination:'Santiago', Flight: 'KT2541', Gate: 89},
    {Time: '14:55', Destination:'Lisboa', Flight: 'PU3561', Gate: 3},
    {Time: '15:10', Destination:'London', Flight: 'TR341', Gate: 10}
  ];

  vuelos2 = [
    {Time: '12:24', Destination:'New York', Flight: 'BA9103', Gate: 15},
    {Time: '13:27', Destination:'Beijing', Flight: 'QA573', Gate: 78},
    {Time: '13:48', Destination:'Tokyo', Flight: 'AE594', Gate: 21},
    {Time: '14:31', Destination:'Roma', Flight: 'VU941', Gate: 13},
    {Time: '15:39', Destination:'Lisboa', Flight: 'AQ9903', Gate: 65},
    {Time: '12:24', Destination:'New York', Flight: 'BA9103', Gate: 15},
    {Time: '13:27', Destination:'Beijing', Flight: 'QA573', Gate: 78},
    {Time: '13:48', Destination:'Tokyo', Flight: 'AE594', Gate: 21},
    {Time: '14:31', Destination:'Roma', Flight: 'VU941', Gate: 13},
    {Time: '15:39', Destination:'Lisboa', Flight: 'AQ9903', Gate: 65},
    {Time: '14:31', Destination:'Roma', Flight: 'VU941', Gate: 13},
    {Time: '15:39', Destination:'Lisboa', Flight: 'AQ9903', Gate: 65}
  ];

}