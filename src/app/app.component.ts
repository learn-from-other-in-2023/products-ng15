import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Products';

  constructor() { }

  ngOnInit(): void {
    // Initialization should be done in ngOnInit()
    this.title = 'Products';
  }
}
