import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenDetailsRoutingModule } from './imagen-details-routing.module';
import { ImagenDetailsComponent } from './imagen-details.component';


@NgModule({
  declarations: [
    ImagenDetailsComponent
  ],
  imports: [
    CommonModule,
    ImagenDetailsRoutingModule
  ]
})
export class ImagenDetailsModule { }
