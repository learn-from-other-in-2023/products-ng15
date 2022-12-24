import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string | undefined;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit is called in header.component.ts');

    // Initialization should be done in ngOnInit()
    // This value will over ride the value in app.component.ts sent as input to this component
    // this.title = 'Title'; 
  }

}

