import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsviewComponent } from './fieldsview/fieldsview.component';
import {TabelleComponent} from './tabelle/tabelle.component';

const routes: Routes = [
  { path: '', component: FieldsviewComponent },
  { path: 'tabelle', component: TabelleComponent },
  { path: '*', component: FieldsviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
