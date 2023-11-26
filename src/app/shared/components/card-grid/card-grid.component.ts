import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  @Input() img!: string;
  @Input() logo!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() price!: any;
  @Input() newPrice!: any;
  @Input() sub!: any;
  @Input() desc!: any;
}
