import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Products';

  name: string | undefined;
  surname: string | undefined;

  formGroup: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('ngOnInit is called in app.component.ts');

    // Initialization should be done in ngOnInit()
    this.title = 'Products';

    this.formGroup = this.formBuilder.group({
      name: '',
      surname: ''
    });

  }

  onFormSubmit(event: any): void {
    console.log('onFormSubmit is called in app.component.ts')
    console.log('name: ' + this.name);
    console.log('surname: ' + this.surname);
  }

}
