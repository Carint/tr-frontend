import { Component, OnInit } from '@angular/core';
import { productsList } from '../../data-app';
import { Product } from '../../interfaces/product.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Product[] = productsList;

  constructor() { }

  ngOnInit(): void {}

}
