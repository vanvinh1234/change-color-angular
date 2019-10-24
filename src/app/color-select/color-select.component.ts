import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {
  title = 'select color';
  color = 'pink';

  constructor() { }

  ngOnInit() {
  }
  onChange(value) {
    this.color = value;
  }

}
