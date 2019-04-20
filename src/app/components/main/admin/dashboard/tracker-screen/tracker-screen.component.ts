import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracker-screen',
  templateUrl: './tracker-screen.component.html',
  styleUrls: ['./tracker-screen.component.css']
})
export class TrackerScreenComponent implements OnInit {

  public vehicles: any[];

  // google maps zoom level
  zoom: number = 18;

  // initial center position for the map
  lat: number = 6.975052576510879;
  lng: number = 79.91507523173664;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor(private db: AngularFireDatabase) {
    //this.vehicles = this.db.list('test-11a39').valueChanges();

    this.db.list('/books').valueChanges()
        .subscribe(data=> {
          console.log("da",data);
          this.vehicles = data;
        })
    
   }

  ngOnInit() {
  }


}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    iconUrl?: string;
}

class Vehicle {
  constructor(public vehicleNo) { }
}
