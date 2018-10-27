import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Request, Trip} from '../../../../classes/request';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import { NgSwitch } from '@angular/common';
import {slide} from '../../../../animations';
import {RequestService} from '../../../../services/request.service';
import {StatusEnum} from '../../../../classes/status';
import {Route, Router} from '@angular/router';


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
    'Department of Accountancy',
    'Department of Anatomy',
    'Department of Archaeology',
    'Department of Bio-Chemistry & Clinical Chemistry',
    'Department of Botany',
    'Department of Chemistry',
    'Department of Commerce and Financial Management (DCFM)',
    'Department of Disability Studies',
    'Department of Economics',
    'Department of English',
    'Department of Family Medicine',
    'Department of Finance',
    'Department of Fine Arts',
    'Department of Forensic Medicine',
    'Department of Geography',
    'Department of Hindi Studies',
    'Department of History',
    'Department of Industrial Management',
    'Department of Library and Information Science',
    'Department of Linguistics',
    'Department of Marketing Management',
    'Department of Mass Communication',
    'Department of Mathematics',
    'Department of Medical Microbiology',
    'Department of Medicine',
    'Department of Microbiology',
    'Department of Modern Languages',
    'Department of Obstetrics & Gynecology',
    'Department of Paediatrics',
    'Department of Pali & Buddhist Studies',
    'Department of Parasitology',
    'Department of Pathology',
    'Department of Pharmacology',
    'Department of Philosophy',
    'Department of Physics',
    'Department of Physiology',
    'Department of Public Health',
    'Department of Sanskrit',
    'Department of Sinhala',
    'Department of Sociology',
    'Department of Statistics & Computer Science',
    'Department of Surgery',
    'Department of Western Classical Culture & Christian Culture',
    'Department of Zoology',
    'Arts Council',
    'Career Guidance Unit',
    'Centre for Heritage Studies',
    'Center for Chinese Studies',
    'Centre of Excellence for Strategic Brand Identity Development (CESBID)',
    'Centre for Gender Studies',
    'Centre for Japanese Studies',
    'Centre for Korean Studies',
    'Center for Students with Disabilities (CCSD)',
    'Center for Sustainability Solutions (CSS)',
    'Confucius Institute',
    'EDCON',
    'Extracurricular Unit',
    'ICCMS',
    'ICT Centre',
    'Media Unit',
    'Quality Assurance Centre',
    'Regional Centre for Ant Research',
    'Research Council',
    'Staff Development Centre',
    'Statistics & Data Monitoring Unit',
    'Technology and Innovation Support Centre',
    'The Samkathana Research Centre',
    'Administration',
    'Other',
    'Software Engineering Teaching Unit'


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
   rePassword = '';
   formD: any = {
     isError: false,
     errMsg: 'no Error'
   };

   isLoading = false;

    refNoOfCreated:number = -1;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search2') public searchElement2: ElementRef;
  constructor(
    private  mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ,
    private requestService: RequestService,
    private router: Router
  ) {
    // this.formData = new Request();
    this.data = this.source.slice();
  }
  nextStep(nStep) {
    this.step = nStep;
  }
  ngOnInit() {
    this.departure.pickupTime = `00:00`;
    this.arrival.dropTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
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
          if ( this.formData.password.length < 4 ) {
            this.formD.isError = true;
            this.formD.errMsg = 'Password should be more than 4 letters';
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

    this.isLoading = true;

    let arrival_temp = new Date(this.arrival.dropDate);
    /*let arrival_hour: any = arrival_temp.getHours();
      if (arrival_hour < 10) {
        arrival_hour = '0' + arrival_hour;
      }

      let arrival_minute: any = arrival_temp.getMinutes();

        if (arrival_minute < 10 ) {
          arrival_minute = '0' + arrival_minute;
        }*/

   // this.arrival.dropTime = `${arrival_hour}:${arrival_minute}`;
    this.arrival.dropDate = `${arrival_temp.getFullYear()}-${arrival_temp.getMonth() + 1}-${arrival_temp.getDate()}`;

    let departure_temp = new Date(this.departure.pickupDate);

    /*let departure_hour: any = departure_temp.getHours();
    if (departure_hour < 10) {
      departure_hour = '0' + departure_hour;
    }

    let departure_minute: any = departure_temp.getMinutes();
    if (departure_minute < 10 ) {
      departure_minute = '0' + departure_minute;
    }*/

    //this.departure.pickupTime = `${departure_hour}:${departure_minute}`;
    this.departure.pickupDate = `${departure_temp.getFullYear()}-${departure_temp.getMonth() + 1}-${departure_temp.getDate()}`;
    /*this.formData.jdatetime = `${this.intl.formatDate(this.dateTime, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.jstartTime, 't')}` ;*/
    /*this.formData.end_date_time = `${this.intl.formatDate(this.enddate, 'yyyy-MMM-dd')}` + ` ${this.intl.formatDate(this.endtime, 't')}` ;*/
    // const x = <Request> this.formData;
    // this.formData.refNo =
    this.formData.status = '0';

    this.formData.arrival = this.arrival;
    this.formData.departure = this.departure;
    this.formData.isPermited = false;
    // console.log(this.formData);
    // add data to the database
    console.log(this.formData);
    this.requestService.addRequest(this.formData)
      .subscribe(response => {
        if (!response['success']) {
          alert('Error occured');
        } else {
          console.log(response);
          //alert('Requested!');

          this.refNoOfCreated = response['msg']['refNo'];
          this.formData.password = response['msg']['password'];
          this.step = 4;
          this.isLoading = false;
          //this.router.navigate(['']);
        }
      });
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
