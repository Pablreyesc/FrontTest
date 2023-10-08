import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  
  },
  { path: 'imagen-list', 
  loadChildren: () => import('./components/Imagen/imagen-list/imagen-list.module')
  .then(m => m.ImagenListModule) }, 
  { path: 'imagen-details', loadChildren: () => import('./components/Imagen/imagen-details/imagen-details.module')
  .then(m => m.ImagenDetailsModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
