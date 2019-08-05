import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/Exam/products.interface';

@Pipe({
  name: 'searchpipe'
})
/***
	 * Purpose : This pipe class is used to check and return a product which is available in database.
	 * operations
	 * * * *
	 *
	 */
export class SearchpipePipe implements PipeTransform {

  transform(product:Products[],searchProduct:any){
    if(!product && !searchProduct){
      return product;
    }
    return product.filter(prod=>prod.category.toLowerCase().startsWith(searchProduct.toLowerCase())
   ||prod.name.toLowerCase().startsWith(searchProduct.toLowerCase())
   ||prod.id.toLowerCase().startsWith(searchProduct.toLowerCase())
   ||prod.price==searchProduct);
  
  }

}
