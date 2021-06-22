import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `<ul *ngFor="let personne of personnes">
    <li>{{ personne }}</li>
    </ul>`,
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent implements OnInit {

  public personnes : string[] = ['Jean', 'Jacques', 'Martin'];

  constructor() { }

  ngOnInit(): void {
  }

}
