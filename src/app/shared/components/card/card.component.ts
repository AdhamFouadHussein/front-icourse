import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() img!: string;
  @Input() logo!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() price!: any;
  @Input() newPrice!: any;
  @Input() sub!: any;

}
