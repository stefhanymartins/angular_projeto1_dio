import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() imgCover: string =
    'https://cdn.videvo.net/videvo_files/video/premium/getty_108/thumbnails/istock-649829348_small.jpg';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string =
    'La magnífica historia de la creación reveló la creatividad de Dios, su majestad y su amor. Sin embargo, el acto más aleccionador, desconcertante e impresionante tuvo lugar cuando Dios sopló el aliento de vida a la humanidad.';
  @Input() id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
