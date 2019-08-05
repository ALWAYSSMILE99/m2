import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Exam/products.interface';
import { ProductService } from 'src/app/Exam/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
/*
	 * Purpose : This class is used for accessing the data from the method getProducts() and also used to delete 
   * a particular row by calling delete();
	 *
	 */
export class ProductlistComponent implements OnInit {
  product:Products[];
  constructor(private productservice :ProductService) { }

  ngOnInit() {
   this.productservice.getProducts().subscribe((data)=>this.product=data,(error)=>console.log(error));;
  }
  remove(prod) {
    let p=this.product.lastIndexOf(prod);
    this.product.splice(p,1);
    } 
}
