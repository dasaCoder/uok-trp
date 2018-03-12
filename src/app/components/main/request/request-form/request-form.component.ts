import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Request, Trip} from '../../../../classes/request';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import { NgSwitch } from '@angular/common';
import {slide} from '../../../../animations';
import {RequestService} from '../../../../services/request.service';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  animations: [
    slide
  ]
})
export class RequestFormComponent implements OnInit {
  public source: Array<string> = [
    'software engineering',
    'department of chemistry',
    'department of mathemetics'
  ];



  public data: Array<string>;
  /*userReq = new Request(3, 'dilusha' );*/
   id: number;
   titleList = [
     'Mr',
     'Mrs' ,
     'Ms',
     'Dr',
     'Prof',
     'Ven'
   ];
   isGood = true;
   step = 1;

   formData: Request = new Request();
   arrival: Trip = new Trip();
   departure: Trip = new Trip();
   /*dateTime ;
   enddate ;
   endtime ;
   jstartTime;*/
   rePassword = '';


  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search2') public searchElement2: ElementRef;
  constructor(private  mapsAPILoader: MapsAPILoader, private ngZone: NgZone , private requestService: RequestService) {
    // this.formData = new Request();
    this.data = this.source.slice();
  }
  nextStep(nStep) {
    this.step = nStep;
  }
  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
        autocomplete.setComponentRestrictions({'country' : ['lk']});
        autocomplete.addListener('place_changed' , () => {
          this.ngZone.run( () => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if ( place.geometry === undefined || place.geometry == null ) {
              return;
            }
            else {
              this.departure.pickupPoint = place.name;
              this.departure.pickPointAddress = place.formatted_address;

              this.arrival.dropPoint = place.name;
              this.arrival.dropPointAddress = place.formatted_address;
            }
          })
        })
      }
    );
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement2.nativeElement);
        autocomplete.setComponentRestrictions({'country' : ['lk']});
        autocomplete.addListener('place_changed' , () => {
          this.ngZone.run( () => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if ( place.geometry === undefined || place.geometry == null ) {
              return;
            }
            else {
              this.arrival.pickupPoint = place.name;
              this.arrival.pickPointAddress = place.formatted_address;

              this.departure.dropPoint = place.name;
              this.departure.dropPointAddress = place.formatted_address;
            }
          })
        })
      }
    )

  }


  formSubmit() {
    /*this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;*/
    /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
    // const x = <Request> this.formData;
    this.formData.arrival = this.arrival;
    this.formData.departure = this.departure;
    this.formData.isPermited = false;
     console.log(this.formData);
     this.requestService.addRequest(this.formData);

  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  isActive(step) {
    if (step == this.step) {
      return 'active';
    }
    else
      return '';
  }




}
