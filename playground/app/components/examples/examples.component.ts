import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { IpComponent } from '../ip/ip.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, IpComponent]
})
export class ExamplesComponent {
  public config = environment;
}
