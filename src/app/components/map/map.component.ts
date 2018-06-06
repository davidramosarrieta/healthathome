import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number; 
  lng: number; 
  zoom: number = 12;


  constructor() { }

  ngOnInit() {
   this.getUserLocation()
  }

  private getUserLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position => {
        this.lat=Position.coords.latitude;
        this.lng=Position.coords.longitude;
      });
    }
  }

}
