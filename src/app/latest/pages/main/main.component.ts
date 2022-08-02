import { Component, OnInit } from '@angular/core';

// TODO: BORRAR EJEMPLOS
interface Product {
  url: string;
  title: string;
  price: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  id: number = 12;

  // TODO: BORRAR LISTADO
  products: Product[] = [
    { url: 'https://cdn.cerealoutfit.com/2022/06/22001029011.jpg', title: 'Top holgado de punto con cuello POLO', price: 'US$ 45.00' },
    { url: 'https://cdn.cerealoutfit.com/2021/05/030524210.jpg', title: 'Bolso bombonera', price: 'US$ 85.90' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22001026011.jpg', title: 'Top suelto de manga corta', price: 'US$ 180.70' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/Untitled-Catalog39452.jpg', title: 'Bolsa de lona', price: 'US$ 220.10' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22011055011.jpg', title: 'Shorts holgados plisado con elástico', price: 'US$ 177.30' },
    { url: 'https://cdn.cerealoutfit.com/2022/04/22001015011.jpg', title: 'Top sin mangas de punto a rayas', price: 'US$ 68.00' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22011054011.jpg', title: 'Pantalón ancho con cordón elástico', price: 'US$ 128.00' },
    { url: 'https://cdn.cerealoutfit.com/2022/04/22011026011.jpg', title: 'Vestido largo plisado con abertura', price: 'US$ 158.00' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22001029011.jpg', title: 'Top holgado de punto con cuello POLO', price: 'US$ 45.00' },
    { url: 'https://cdn.cerealoutfit.com/2021/05/030524210.jpg', title: 'Bolso bombonera', price: 'US$ 85.90' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22001026011.jpg', title: 'Top suelto de manga corta', price: 'US$ 180.70' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/Untitled-Catalog39452.jpg', title: 'Bolsa de lona', price: 'US$ 220.10' },
    { url: 'https://cdn.cerealoutfit.com/2022/06/22011055011.jpg', title: 'Shorts holgados plisado con elástico', price: 'US$ 177.30' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
