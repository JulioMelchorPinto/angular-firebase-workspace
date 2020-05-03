import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  exports: [
    FormsModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule,
    MatInputModule,
    MatSliderModule
    ]
})
export class MaterialModule {}
