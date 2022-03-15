import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsCountryModule } from '@firestitch/country';
import { FsIpComponent } from './components/ip/ip.component';


@NgModule({
  imports: [
    CommonModule,
    
    MatTooltipModule,

    FsCountryModule,
  ],
  exports: [
    FsIpComponent,
  ],
  declarations: [
    FsIpComponent,
  ],
})
export class FsIpModule {
  static forRoot(): ModuleWithProviders<FsIpModule> {
    return {
      ngModule: FsIpModule,
    };
  }
}
