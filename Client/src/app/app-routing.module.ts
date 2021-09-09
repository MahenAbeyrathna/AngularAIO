import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormComponent } from './reactive/custom-form.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
const routes: Routes = [  
  { path: 'custom-form', component: CustomFormComponent },
  { path : 'app-component-communication' ,component:ComponentCommunicationComponent},
  { path: '**', redirectTo: 'app-component-communication' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
