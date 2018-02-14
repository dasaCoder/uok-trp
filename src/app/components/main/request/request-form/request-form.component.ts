import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { Request } from '../../../../classes/request';
import {IntlService} from '@progress/kendo-angular-intl';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
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

   formData: any = {};
   dateTime ;
   enddate ;
   endtime ;
   jstartTime;
   rePassword = '';


  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search2') public searchElement2: ElementRef;
  constructor(private  mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private intl: IntlService ) {
    this.data = this.source.slice();
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
          })
        })
      }
    )

  }

  formSubmit() {
    this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;
    /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
    console.log(this.formData);
  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }


}
