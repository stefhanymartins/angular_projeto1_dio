import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() imgCover: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
  @Input() cardTitle: string = 'Dios es el bien más precioso';
  @Input() cardDescription: string = 'los últimos serán primero';

  constructor() {}

  ngOnInit(): void {}
}
