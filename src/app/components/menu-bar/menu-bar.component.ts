import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  @Input() menuLink1: string = 'https://www.linkedin.com/in/stefhanymce/';
  @Input() menuLink2: string = 'https://github.com/stefhanymartins';
  @Input() menuLink3: string = 'https://www.youtube.com/channel/UCJdac8WoXwAkSb8B_0VufnQ';

  constructor() {}

  ngOnInit(): void {}
}
