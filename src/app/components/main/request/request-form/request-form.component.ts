import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Request, Trip} from '../../../../classes/request';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import { NgSwitch } from '@angular/common';
import {slide} from '../../../../animations';
import {RequestService} from '../../../../services/request.service';
import {StatusEnum} from '../../../../classes/status';


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
   today = new Date();
   formData: Request = new Request();
   arrival: Trip = new Trip();
   departure: Trip = new Trip();
   /*dateTime ;
   enddate ;
   endtime ;
   jstartTime;*/
   rePassword = '';
   formD: any = {
     isError: false,
     errMsg: 'no Error'
   };


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

  validateEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateForm() {
    // checking the fields are empty
    if ( !this.formData.lecturer || !this.formData.dep_unit || !this.formData.email || !this.formData.password ) {
      this.formD.isError = true;
      this.formD.errMsg = 'Please fill all requird fields';
      alert(this.formD.errMsg);
    } else {
      // validate the email
      // console.log(this.validateEmail(this.formData.email));
      if ( this.validateEmail(this.formData.email)) {
        // check whether the password is matchin
        if ( this.formData.password === this.rePassword) {
          // check the size of the password in healthy
          if ( this.formData.password.length < 5 ) {
            this.formD.isError = true;
            this.formD.errMsg = 'Password is too short';
            // alert('password is too short');
            this.formData.password = '';
            this.rePassword = '';
          } else {
            this.formSubmit();
          }

        } else {
          this.formData.password = '';
          this.rePassword = '';
          this.formD.isError = true;
          this.formD.errMsg = 'Passwords are not matching';
          // alert('password not matched');
        }
      } else {
        this.formD.isError = true;
        this.formD.errMsg = 'Please enter valid email address';
        // alert('Please enter valid email');
        this.formData.email = '';
      }

    }
  }

  formSubmit() {
    /*this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;*/
    /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
    // const x = <Request> this.formData;
    // this.formData.refNo =
    this.formData.status = {
      status: StatusEnum.NOT_CONSIDERED
    };
    this.formData.arrival = this.arrival;
    this.formData.departure = this.departure;
    this.formData.isPermited = false;
    console.log(this.formData);
    // add data to the database
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
