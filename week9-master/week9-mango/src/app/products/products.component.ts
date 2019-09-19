import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { Products } from '../products'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //products: new Products = [];
  products: any;
  constructor(/*private product: Products,*/ private generalService: GeneralService, private router:Router) { }

  ngOnInit() {

    this.generalService.getlist().subscribe((data)=>{
      // for(let i=0; i < data.length; i++){
      //   this.products.push(data[i])
      // }
      
      this.products = data;
      console.log(data)
   });

  }

  addDummyItems(){
    console.log("Button Pressed")
    this.generalService.addDummyData()
    this.generalService.getlist().subscribe((data)=>{
      this.products = data;
      console.log(data)
   });
  }

  deleteItem(id){
    this.generalService.deleteitem(id).subscribe((data)=>{
      this.products = data;
    })
  }

}
