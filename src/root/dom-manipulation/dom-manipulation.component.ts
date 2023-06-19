import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.css'],
})
export class DomManipulationComponent implements OnInit {
  items: any = [
    {
      label: 'First Option',
      value: 'one',
    },
    {
      label: 'Second Option',
      value: 'two',
    },
    {
      label: 'Third Option',
      value: 'three',
    },
  ];
  constructor() {}

  ngOnInit() {}

  AddNow(id) {
    document.querySelector('#' + id).classList.add('blue-color');
  }

  RemoveNow(id) {
    document.querySelector('#' + id).classList.remove('blue-color');
  }
}
