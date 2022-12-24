import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Products';

  name: string | undefined;
  surname: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // Initialization should be done in ngOnInit()
    this.title = 'Products';

    console.log('ngOnInit is called in app.component.ts')
  }

  onFormSubmit(event: any): void {
    console.log('onFormSubmit is called in app.component.ts')
    console.log('name: ' + this.name);
    console.log('surname: ' + this.surname);
  }

}
