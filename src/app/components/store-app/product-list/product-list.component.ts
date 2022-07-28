import { Component, OnInit } from '@angular/core';
import { DunhallService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  eletronicos: any;
  dunhallService : DunhallService


  constructor( dunhallService : DunhallService ) { 
    this.dunhallService = dunhallService;
   }

  ngOnInit(): void {

    this.eletronicos = this.dunhallService.getDunhall().subscribe((data => {

      this.eletronicos = data;
      console.log(this.eletronicos);
    }))
  }

}
