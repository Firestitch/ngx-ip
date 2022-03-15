import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';


@Component({
  selector: 'fs-ip',
  templateUrl: './ip.component.html',
  styleUrls: [ './ip.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsIpComponent {

  @Input() public country: string;
  @Input() public region: string;
  @Input() public ip: string;
  @Input() public lat: string;
  @Input() public lng: string;
  @Input() public showIp = true;

}
