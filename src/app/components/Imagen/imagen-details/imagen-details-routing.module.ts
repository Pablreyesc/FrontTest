import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenDetailsComponent } from './imagen-details.component';

const routes: Routes = [{ path: '', component: ImagenDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagenDetailsRoutingModule { }
