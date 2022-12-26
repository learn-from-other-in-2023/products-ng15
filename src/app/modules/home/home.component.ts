import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Products';

  name: string | undefined;
  surname: string | undefined;

  formGroup: FormGroup | undefined;

  numbers$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  numbersSubscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('ngOnInit is called in app.component.ts');

    // Initialization should be done in ngOnInit()
    this.title = 'Products';

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });

    this.displayNumbers();

    this.onFormChanges();
  }

  ngOnDestroy(): void {
    this.numbersSubscription?.unsubscribe();

    this.formSubscription?.unsubscribe();
  }

  displayNumbers(): void {
    console.log('displayNumbers is called in app.component.ts');

    this.numbersSubscription = this.numbers$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  onFormChanges(): void {
    console.log('onFormChanges is called in app.component.ts');
    this.formSubscription = this.formGroup?.valueChanges.subscribe({
      next: (value) => {
        console.log('Form Value: ' + JSON.stringify(value));
      },
    });
  }

  onFormSubmit(): void {
    console.log('onFormSubmit is called in app.component.ts')
    console.log('name: ' + this.name + 'surname: ' + this.surname);

    console.log('Form Valid: ' + this.formGroup?.valid + ' :: Form Value: ' + JSON.stringify(this.formGroup?.value));
  }
  
}
