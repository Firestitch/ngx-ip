import { NgModule, ModuleWithProviders } from '@angular/core';

import { FsCountryModule } from '@firestitch/country';
import { FsIpComponent } from './components/ip/ip.component';


@NgModule({
  imports: [
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
