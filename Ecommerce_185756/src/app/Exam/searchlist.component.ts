import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Exam/products.interface';
import { ProductService } from 'src/app/Exam/product.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
/***
	 * Purpose : This class is used to search a particular product
	 *
	 */
export class SearchlistComponent implements OnInit {
  searchProduct2: any;
  resultProduct: Products[];
  searchProduct1:any;

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe((data)=>this.resultProduct=data,(error)=>console.log(error));
  }

  search(){
    
    this.searchProduct2=this.searchProduct1;
  
  }
}
