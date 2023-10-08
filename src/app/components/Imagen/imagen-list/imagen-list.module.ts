import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenListRoutingModule } from './imagen-list-routing.module';
import { ImagenListComponent } from './imagen-list.component';


@NgModule({
  declarations: [
    ImagenListComponent
  ],
  imports: [
    CommonModule,
    ImagenListRoutingModule
  ]
})
export class ImagenListModule { }
