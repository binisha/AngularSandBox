import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // center: any = {
    lat: 33.5362475;
    lng: -111.9267386
  // };
  constructor() { }

  ngOnInit() {
  }
  onMapReady(map) {
    this.initDrawingManager(map);
  }
  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };
    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }
}
