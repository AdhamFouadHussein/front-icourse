import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  lat = 32.54320430000001;
  lng = 35.8504892;
  location = 'Irbid, Jordan';

  markers: any[] = [];

  ngOnInit(): void {
    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233
      },
      label: {
        // color: "black",
        // text: "Madrid",
      },
    });
  }
}
