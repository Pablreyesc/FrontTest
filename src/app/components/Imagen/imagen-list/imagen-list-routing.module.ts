import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenListComponent } from './imagen-list.component';

const routes: Routes = [{ path: '', component: ImagenListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagenListRoutingModule { }
