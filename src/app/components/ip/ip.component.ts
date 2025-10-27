import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FsCountryModule } from '@firestitch/country';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
    selector: 'fs-ip',
    templateUrl: './ip.component.html',
    styleUrls: ['./ip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgTemplateOutlet,
        FsCountryModule,
        MatTooltip,
    ],
})
export class FsIpComponent {

  @Input() public country: string;
  @Input() public region: string;
  @Input() public ip: string;
  @Input() public lat: string;
  @Input() public lng: string;
  @Input() public showIp = true;

}
