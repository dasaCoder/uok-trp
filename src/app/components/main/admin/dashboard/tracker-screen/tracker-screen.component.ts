import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tracker-screen',
  templateUrl: './tracker-screen.component.html',
  styleUrls: ['./tracker-screen.component.css']
})
export class TrackerScreenComponent implements OnInit {

  public vehicles: any[];

  // google maps zoom level
  zoom: number = 18;

  markers: marker[] = [
      {
        lat: 6.975739464451433,
        lng: 79.9152656685767,
        label: 'XXX-4561',
        draggable: true,
        iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
      },
      {
        lat: 6.974301790865349,
        lng: 79.91610519999836,
        label: 'DDD-8965',
        draggable: false
      },
      {
        lat: 6.975222967411798,
        lng: 79.91478287095401,
        label: 'MMM-4856',
        draggable: true
      }
  ];

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

  constructor(db: AngularFirestore) {
    db.collection('/vehicles')
          .valueChanges()
          .subscribe(data => {
            this.vehicles = data;
            console.log("v",this.vehicles);
          });
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
