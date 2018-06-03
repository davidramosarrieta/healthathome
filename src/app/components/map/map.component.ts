import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 6.217;
  lng: number = -75.567;
  zoom: number = 12;
  constructor() { }

  ngOnInit() {
   
  }

}
