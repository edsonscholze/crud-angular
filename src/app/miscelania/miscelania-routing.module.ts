import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscelaniaComponent } from './miscelania/miscelania.component';

const routes: Routes = [{ path: '', component: MiscelaniaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscelaniaRoutingModule {}
