import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   private url:string = "https://jsonplaceholder.typicode.com/users"
   constructor(private httpClient:HttpClient){  }

   getAllProducts(){
    return this.httpClient.get(this.url)
   }

   getProduct(id:number){
    return this.httpClient.get(this.url+'/'+id)
   }
}
