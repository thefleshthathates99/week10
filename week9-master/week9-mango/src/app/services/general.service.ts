import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }

  getitem(productID){
    return this.http.post<any>('http://localhost:3000/api/getitem',  {'productid':productID} );
  }

  updateitem(product){
    return this.http.post<any>('http://localhost:3000/api/update',  product );
  }

  addDummyData(){
    return this.http.get<any>('http://localhost:3000/api/addDummy')
  }

  deleteitem(productID){
    return this.http.post<any>('http://localhost:3000/api/deleteitem',  {'productid':productID} );

  }

  add(product){
    return this.http.post<any>('http://localhost:3000/api/add',  product );
  }

  findLast(){
    return this.http.get<any>('http://localhost:3000/api/getLast');
  }
}
