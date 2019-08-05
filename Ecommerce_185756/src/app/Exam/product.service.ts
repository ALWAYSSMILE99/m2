import { Injectable } from '@angular/core';
import { Products } from 'src/app/Exam/products.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
	 * Purpose : Service from where the components can send data to this and access json array.
   * a gateway between each and every component and database whic is json.
   * method:getProducts
   * return value:list of product
	 * 
	 *
	 */
export class ProductService {
  [x: string]: any;
  product:Products[];
  value:string;

  constructor(private http:HttpClient) {}
  getProducts():Observable<Products[]>{
    return  this.http.get<Products[]>("./assets/db.json");
  }
}
