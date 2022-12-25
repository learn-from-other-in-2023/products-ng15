import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [

    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
    ]
})
export class NgMaterialModule { }
