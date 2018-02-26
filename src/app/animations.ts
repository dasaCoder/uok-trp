import {animate, style, transition, trigger} from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-10px)'}),
    animate(500)
  ]),
  transition(':leave', [
    animate(500, style({ transform: 'transformX(-100%)'}))
  ])
])
