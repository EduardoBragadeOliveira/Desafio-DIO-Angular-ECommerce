import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../model/store.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  eletronico!: Store;
  constructor() { }

  ngOnInit(): void {
  }

}
