import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private _baseUrl: string = 'https://fakestoreapi.com';

    constructor(
        private _http: HttpClient
    ) {}

    getAllProducts() {
        const url = `${ this._baseUrl }/products`;

        return this._http.get<Product[]>(url);
    }

    newProducts() {
        const url = `${ this._baseUrl }/products?limit=8`;

        return this._http.get<Product[]>(url);
    }
}
