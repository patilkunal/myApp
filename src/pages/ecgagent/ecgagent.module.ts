import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ecgagent } from './ecgagent';

@NgModule({
  declarations: [
    Ecgagent,
  ],
  imports: [
    IonicPageModule.forChild(Ecgagent),
  ],
  exports: [
    Ecgagent
  ]
})
export class EcgagentModule {}
