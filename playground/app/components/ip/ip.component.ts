import { Component, OnInit } from '@angular/core';
import { FsIpComponent } from '../../../../src/app/components/ip/ip.component';


@Component({
    selector: 'app-ip',
    templateUrl: './ip.component.html',
    styleUrls: ['./ip.component.scss'],
    standalone: true,
    imports: [FsIpComponent]
})
export class IpComponent implements OnInit {

  public ip;

  constructor() { }

  public ngOnInit(): void {
    this.ip = {
      country: 'CA',
      region: 'Ontario',
      ip: '122.32.21.221',
      lat: 43.7183438,
      lng: -79.4482689
    };
  }

}
